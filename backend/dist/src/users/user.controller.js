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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const serialize_interceptor_1 = require("../../interceptors/serialize.interceptor");
const user_dto_1 = require("./dtos/user.dto");
const auth_service_1 = require("./auth.service");
const create_user_dto_1 = require("./dtos/create-user.dto");
const sign_user_dto_1 = require("./dtos/sign-user.dto");
const swagger_1 = require("@nestjs/swagger");
const swagger_response_1 = require("../../swagger/swagger.response");
const jwt_auth_guard_1 = require("../../guards/jwt-auth.guard");
let UserController = class UserController {
    constructor(authService) {
        this.authService = authService;
    }
    async signin(body) {
        const user = await this.authService.signin(body.email, body.password);
        return user;
    }
    async createUser(body) {
        const { email, username, password } = body;
        const user = await this.authService.signUp({ email, username, password });
        return user;
    }
    getUser(headers) {
        return this.authService.getUser({ userId: headers['x-user-id'] });
    }
};
__decorate([
    (0, swagger_1.ApiInternalServerErrorResponse)({ type: swagger_response_1.InternalServerErrorResponse }),
    (0, swagger_1.ApiUnauthorizedResponse)({ type: swagger_response_1.UnauthorizedResponse }),
    (0, swagger_1.ApiBadRequestResponse)({ type: swagger_response_1.BadRequestResponse }),
    (0, swagger_1.ApiOkResponse)({ type: swagger_response_1.UserSignInResponse }),
    (0, common_1.Post)('/signin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_user_dto_1.SignInUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signin", null);
__decorate([
    (0, swagger_1.ApiInternalServerErrorResponse)({ type: swagger_response_1.InternalServerErrorResponse }),
    (0, swagger_1.ApiUnauthorizedResponse)({ type: swagger_response_1.UnauthorizedResponse }),
    (0, swagger_1.ApiBadRequestResponse)({ type: swagger_response_1.BadRequestResponse }),
    (0, swagger_1.ApiOkResponse)({ type: swagger_response_1.UserSignInResponse }),
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, swagger_1.ApiInternalServerErrorResponse)({ type: swagger_response_1.InternalServerErrorResponse }),
    (0, swagger_1.ApiUnauthorizedResponse)({ type: swagger_response_1.UnauthorizedResponse }),
    (0, swagger_1.ApiBadRequestResponse)({ type: swagger_response_1.BadRequestResponse }),
    (0, swagger_1.ApiOkResponse)({ type: swagger_response_1.UserSignInResponse }),
    (0, swagger_1.ApiHeaders)([{ name: 'X-User-Id' }]),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('/user'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUser", null);
UserController = __decorate([
    (0, common_1.Controller)({
        path: 'auth',
        version: '1',
    }),
    (0, serialize_interceptor_1.Serialize)(user_dto_1.UserDto),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map