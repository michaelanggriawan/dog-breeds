import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './user.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

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
      const user = await this.usersService.find(email);
      if (user) {
        throw new BadRequestException('email in use');
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
      return response;
    } catch (error) {
      this.logger.error(error);
    }
  }

  async signin(email: string, password: string) {
    try {
      const user = await this.usersService.find(email);
      if (!user) {
        throw new NotFoundException('user not found');
      }

      const [salt, storedHash] = user.password.split('.');

      const hash = (await scrypt(password, salt, 32)) as Buffer;

      if (storedHash !== hash.toString('hex')) {
        throw new BadRequestException('bad password');
      }
      this.logger.info(`${email} - sign in`);
      return user;
    } catch (error) {
      this.logger.error(error);
    }
  }
}
