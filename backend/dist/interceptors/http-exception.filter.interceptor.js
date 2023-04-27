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
var AllExceptionFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const nestjs_pino_1 = require("nestjs-pino");
const DEFAULT_ERROR_MESSAGE = 'Something went wrong on our end, please try again';
let AllExceptionFilter = AllExceptionFilter_1 = class AllExceptionFilter {
    constructor(logger) {
        this.logger = logger;
    }
    logError(status, errorMessage) {
        if (status >= 500) {
            this.logger.error(errorMessage);
        }
        else {
            this.logger.warn(errorMessage);
        }
    }
    catch(exception, host) {
        var _a, _b, _c;
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        if (!exception || typeof exception.getStatus !== 'function') {
            return response.status(500).json({
                statusCode: 500,
                success: false,
                errors: [{ message: DEFAULT_ERROR_MESSAGE }],
            });
        }
        const status = exception.getStatus();
        const errorMessage = ((_a = exception.getResponse()) === null || _a === void 0 ? void 0 : _a.message) ||
            exception.message ||
            DEFAULT_ERROR_MESSAGE;
        this.logError(status, errorMessage);
        let handleErrorMessageResponse = [];
        if (typeof errorMessage === 'string') {
            handleErrorMessageResponse = [{ message: errorMessage }];
        }
        else if (Array.isArray(errorMessage)) {
            handleErrorMessageResponse = errorMessage.map((message) => {
                return { message };
            });
        }
        response.status(status).json({
            statusCode: status,
            success: false,
            errors: (_c = (_b = exception.getResponse()) === null || _b === void 0 ? void 0 : _b.errors) !== null && _c !== void 0 ? _c : handleErrorMessageResponse,
        });
    }
};
AllExceptionFilter = AllExceptionFilter_1 = __decorate([
    (0, common_1.Catch)(),
    __param(0, (0, nestjs_pino_1.InjectPinoLogger)(AllExceptionFilter_1.name)),
    __metadata("design:paramtypes", [nestjs_pino_1.PinoLogger])
], AllExceptionFilter);
exports.AllExceptionFilter = AllExceptionFilter;
//# sourceMappingURL=http-exception.filter.interceptor.js.map