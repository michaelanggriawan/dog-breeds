"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const crypto_1 = require("crypto");
const util_1 = require("util");
const nestjs_pino_1 = require("nestjs-pino");
const jose = require("jose");
const keys = require("../../credentials/credentials.json");
const scrypt = (0, util_1.promisify)(crypto_1.scrypt);
let AuthService = AuthService_1 = class AuthService {
    constructor(usersService, logger) {
        this.usersService = usersService;
        this.logger = logger;
    }
    async signUp({ email, username, password, }) {
        try {
            const user = await this.usersService.find({ email, username });
            if (user) {
                throw new common_1.BadRequestException('email or username in use');
            }
            const salt = (0, crypto_1.randomBytes)(8).toString('hex');
            const hash = (await scrypt(password, salt, 32));
            const result = salt + '.' + hash.toString('hex');
            const response = await this.usersService.create({
                email,
                username,
                password: result,
            });
            this.logger.info(`${email} - sign up`);
            const token = await this.createToken({ email, userId: response.userId });
            return Object.assign(Object.assign({}, response), token);
        }
        catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
    async signin(email, password) {
        try {
            const user = await this.usersService.find({ email });
            if (!user) {
                throw new common_1.NotFoundException('user not found');
            }
            const [salt, storedHash] = user.password.split('.');
            const hash = (await scrypt(password, salt, 32));
            if (storedHash !== hash.toString('hex')) {
                throw new common_1.BadRequestException('invalid password');
            }
            const token = await this.createToken({ email, userId: user.userId });
            this.logger.info(`${email} - sign in`);
            return Object.assign(Object.assign({}, user), token);
        }
        catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
    async getUser({ userId }) {
        try {
            const result = await this.usersService.findById({ userId });
            return result;
        }
        catch (error) {
            this.logger.error(error);
        }
    }
    async createToken({ userId, email, }) {
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
};
AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, nestjs_pino_1.InjectPinoLogger)(AuthService_1.name)),
    __metadata("design:paramtypes", [user_service_1.UsersService,
        nestjs_pino_1.PinoLogger])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map