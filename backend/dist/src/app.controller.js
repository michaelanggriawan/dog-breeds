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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const jwt_auth_guard_1 = require("../guards/jwt-auth.guard");
const save_breeds_dto_1 = require("./users/dtos/save-breeds.dto");
const delete_breeds_dto_1 = require("./users/dtos/delete-breeds.dto");
const swagger_1 = require("@nestjs/swagger");
const swagger_response_1 = require("../swagger/swagger.response");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getBreeds() {
        return this.appService.getBreeds();
    }
    saveBreeds(headers, body) {
        return this.appService.saveBreeds({
            selectedBreeds: body.selectedBreeds,
            userId: headers['x-user-id'],
        });
    }
    getSaveBreeds(headers) {
        return this.appService.getSaveBreeds({ userId: headers['x-user-id'] });
    }
    deleteBreeds(headers, body) {
        return this.appService.deleteBreed({
            breed: body.breed,
            userId: headers['x-user-id'],
        });
    }
    getBreedImages(headers) {
        return this.appService.getRandomBreedImages({
            userId: headers['x-user-id'],
        });
    }
};
__decorate([
    (0, swagger_1.ApiInternalServerErrorResponse)({ type: swagger_response_1.InternalServerErrorResponse }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiUnauthorizedResponse)({ type: swagger_response_1.UnauthorizedResponse }),
    (0, swagger_1.ApiBadRequestResponse)({ type: swagger_response_1.BadRequestResponse }),
    (0, swagger_1.ApiHeaders)([{ name: 'X-User-Id' }]),
    (0, swagger_1.ApiOkResponse)({ type: swagger_response_1.BreedsResponse }),
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getBreeds", null);
__decorate([
    (0, swagger_1.ApiInternalServerErrorResponse)({ type: swagger_response_1.InternalServerErrorResponse }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiUnauthorizedResponse)({ type: swagger_response_1.UnauthorizedResponse }),
    (0, swagger_1.ApiBadRequestResponse)({ type: swagger_response_1.BadRequestResponse }),
    (0, common_1.Post)('/save'),
    (0, swagger_1.ApiCreatedResponse)({ type: swagger_response_1.SaveSelectedBreedsResponse }),
    (0, swagger_1.ApiHeaders)([{ name: 'X-User-Id' }]),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Headers)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, save_breeds_dto_1.SaveBreedsDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "saveBreeds", null);
__decorate([
    (0, swagger_1.ApiInternalServerErrorResponse)({ type: swagger_response_1.InternalServerErrorResponse }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiUnauthorizedResponse)({ type: swagger_response_1.UnauthorizedResponse }),
    (0, swagger_1.ApiBadRequestResponse)({ type: swagger_response_1.BadRequestResponse }),
    (0, common_1.Get)('/save'),
    (0, swagger_1.ApiCreatedResponse)({ type: swagger_response_1.GetSaveSelectedBreedsResponse }),
    (0, swagger_1.ApiHeaders)([{ name: 'X-User-Id' }]),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getSaveBreeds", null);
__decorate([
    (0, swagger_1.ApiInternalServerErrorResponse)({ type: swagger_response_1.InternalServerErrorResponse }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiUnauthorizedResponse)({ type: swagger_response_1.UnauthorizedResponse }),
    (0, swagger_1.ApiBadRequestResponse)({ type: swagger_response_1.BadRequestResponse }),
    (0, common_1.Delete)('/save'),
    (0, swagger_1.ApiHeaders)([{ name: 'X-User-Id' }]),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiCreatedResponse)({ type: swagger_response_1.SaveSelectedBreedsResponse }),
    __param(0, (0, common_1.Headers)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, delete_breeds_dto_1.DeleteBreedsDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "deleteBreeds", null);
__decorate([
    (0, swagger_1.ApiInternalServerErrorResponse)({ type: swagger_response_1.InternalServerErrorResponse }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiUnauthorizedResponse)({ type: swagger_response_1.UnauthorizedResponse }),
    (0, swagger_1.ApiBadRequestResponse)({ type: swagger_response_1.BadRequestResponse }),
    (0, common_1.Get)('/images'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOkResponse)({ type: swagger_response_1.GetSelectedBreedResponse }),
    __param(0, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getBreedImages", null);
AppController = __decorate([
    (0, common_1.Controller)({
        path: 'breeds',
        version: '1',
    }),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map