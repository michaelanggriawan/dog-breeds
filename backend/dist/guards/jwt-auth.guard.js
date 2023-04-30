"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const jose = require("jose");
let JwtAuthGuard = class JwtAuthGuard {
    async canActivate(context) {
        var _a, _b, _c;
        let payload;
        const request = this.getAuthentication(context);
        const accessToken = (_c = (_b = (_a = request === null || request === void 0 ? void 0 : request.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.split(' ')[1]) !== null && _c !== void 0 ? _c : null;
        const userId = (request === null || request === void 0 ? void 0 : request.headers['x-user-id']) || '';
        if (!accessToken) {
            throw new common_2.UnauthorizedException('unauthorized');
        }
        try {
            payload = jose.decodeJwt(accessToken);
        }
        catch (error) {
            throw new common_2.UnauthorizedException('unauthorized');
        }
        if ((payload === null || payload === void 0 ? void 0 : payload.userId) !== userId) {
            throw new common_1.ForbiddenException('invalid token');
        }
        if (payload.exp * 1000 < Date.now()) {
            throw new common_2.UnauthorizedException('session expired');
        }
        return true;
    }
    getAuthentication(context) {
        let request;
        if (context.getType() === 'rpc') {
            request = context.switchToRpc().getData();
        }
        else if (context.getType() === 'http') {
            request = context.switchToHttp().getRequest();
        }
        return request;
    }
};
JwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;
//# sourceMappingURL=jwt-auth.guard.js.map