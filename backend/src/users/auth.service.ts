import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './user.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import * as jose from 'jose';
import * as keys from 'credentials/credentials.json';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    @InjectPinoLogger(AuthService.name)
    private readonly logger: PinoLogger,
  ) {}
  async signUp({
    email,
    username,
    password,
  }: {
    email: string;
    username: string;
    password: string;
  }) {
    try {
      // See if email is in use
      const user = await this.usersService.find({ email, username });
      if (user) {
        throw new BadRequestException('email or username in use');
      }

      // Hash the users password
      // Generate a salt
      const salt = randomBytes(8).toString('hex');

      // Hash the salt and the password together
      const hash = (await scrypt(password, salt, 32)) as Buffer;

      // Join the hashed result and the salt together
      const result = salt + '.' + hash.toString('hex');

      // Create a new user and save it
      const response = await this.usersService.create({
        email,
        username,
        password: result,
      });
      this.logger.info(`${email} - sign up`);
      const token = await this.createToken({ email, userId: response.userId });
      return { ...response, ...token };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async signin(email: string, password: string) {
    try {
      const user = await this.usersService.find({ email });
      if (!user) {
        throw new NotFoundException('user not found');
      }

      const [salt, storedHash] = user.password.split('.');

      const hash = (await scrypt(password, salt, 32)) as Buffer;

      if (storedHash !== hash.toString('hex')) {
        throw new BadRequestException('invalid password');
      }

      const token = await this.createToken({ email, userId: user.userId });

      this.logger.info(`${email} - sign in`);

      return { ...user, ...token };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  private async createToken({
    userId,
    email,
  }: {
    userId: string;
    email: string;
  }) {
    const algorithm = 'RS256';
    const pkcs8 = keys.private_key;
    const ecPrivateKey = await jose.importPKCS8(pkcs8, algorithm);
    const jwt = await new jose.SignJWT({
      userId,
      email,
    })
      .setProtectedHeader({
        alg: algorithm,
        typ: 'JWT',
        kid: keys.private_key_id,
      })
      .setIssuer(keys.client_email)
      .setSubject(keys.client_email)
      .setIssuedAt()
      .setExpirationTime('1d')
      .sign(ecPrivateKey);

    const response = jose.decodeJwt(jwt);

    return {
      token: jwt,
      expToken: response.exp,
    };
  }
}
