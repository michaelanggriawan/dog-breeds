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
var AppService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const config_1 = require("@nestjs/config");
const nestjs_pino_1 = require("nestjs-pino");
const firestore_1 = require("@google-cloud/firestore");
const breeds_document_1 = require("../firestore-document/breeds.document");
let AppService = AppService_1 = class AppService {
    constructor(httpService, configService, logger, breedsCollection) {
        this.httpService = httpService;
        this.configService = configService;
        this.logger = logger;
        this.breedsCollection = breedsCollection;
    }
    async getBreeds() {
        const response = await (0, rxjs_1.lastValueFrom)(this.httpService
            .get(`${this.configService.get('DOG_CEO_URL')}breeds/list/all`)
            .pipe((0, rxjs_1.map)((response) => response.data), (0, rxjs_1.catchError)((err) => {
            this.logger.error(err);
            throw new common_1.HttpException(err.response.data, err.response.status);
        })));
        this.logger.info('Get breeds');
        return Object.keys(response.message);
    }
    async saveBreeds({ userId, selectedBreeds, }) {
        try {
            const docRef = this.breedsCollection.doc(userId);
            const breedAndImage = [];
            const isExist = (await docRef.get()).exists;
            let result = isExist
                ? (await docRef.get()).data()
                : { selectedBreeds: [] };
            for (const breed of selectedBreeds) {
                for (const item of result.selectedBreeds) {
                    if (item.breed === breed) {
                        throw new common_1.UnprocessableEntityException(`${breed} already added`);
                    }
                }
                const response = await (0, rxjs_1.lastValueFrom)(this.httpService
                    .get(`${this.configService.get('DOG_CEO_URL')}breed/${breed}/images/random`)
                    .pipe((0, rxjs_1.map)((response) => response.data), (0, rxjs_1.catchError)((err) => {
                    this.logger.error(err);
                    throw new common_1.HttpException(err.response.data, err.response.status);
                })));
                breedAndImage.push({ image: response.message, breed });
            }
            if (result.selectedBreeds.length + selectedBreeds.length > 3) {
                throw new common_1.BadGatewayException('Selected breed cannot more than 3');
            }
            if (result.selectedBreeds.length >= 3) {
                throw new common_1.UnprocessableEntityException('Selected breed already up to 3');
            }
            await docRef.set({
                selectedBreeds: [...result.selectedBreeds, ...breedAndImage],
            });
            result = (await docRef.get()).data();
            this.logger.info(`${userId} save breeds`);
            return result;
        }
        catch (err) {
            this.logger.error(err);
            throw err;
        }
    }
    async getSaveBreeds({ userId }) { }
    async deleteBreed({ userId, breed }) {
        const docRef = this.breedsCollection.doc(userId);
        let result = (await docRef.get()).data();
        for (const [key, value] of Object.entries(result)) {
            if (key === 'breed' && value === breed) {
                throw new common_1.NotFoundException(`${breed} doesn't exist`);
            }
        }
        const selectedBreeds = result.selectedBreeds.filter((s) => s.breed !== breed);
        await docRef.set({
            selectedBreeds: selectedBreeds,
        });
        result = (await docRef.get()).data();
        return result;
    }
    async getRandomBreedImages({ userId }) {
        const docRef = this.breedsCollection.doc(userId);
        const isExist = (await docRef.get()).exists;
        if (!isExist)
            throw new common_1.NotFoundException("You don't have selected breeds");
        const result = (await docRef.get()).data();
        const images = [];
        if (result.selectedBreeds.length < 0)
            throw new common_1.NotFoundException("You don't have selected breeds");
        const maxImage = 3;
        for (const breed of result.selectedBreeds) {
            const response = await (0, rxjs_1.lastValueFrom)(this.httpService
                .get(`${this.configService.get('DOG_CEO_URL')}breed/${breed.breed}/images/random/${maxImage}`)
                .pipe((0, rxjs_1.map)((response) => response.data), (0, rxjs_1.catchError)((err) => {
                this.logger.error(err);
                throw new common_1.HttpException(err.response.data, err.response.status);
            })));
            images.push({
                images: response.message,
                breed: breed.breed,
            });
        }
        return images;
    }
};
AppService = AppService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, nestjs_pino_1.InjectPinoLogger)(AppService_1.name)),
    __param(3, (0, common_1.Inject)(breeds_document_1.BreedsDocument.collectionName)),
    __metadata("design:paramtypes", [axios_1.HttpService,
        config_1.ConfigService,
        nestjs_pino_1.PinoLogger,
        firestore_1.CollectionReference])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map