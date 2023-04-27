"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const configuration_1 = require("../config/configuration");
const nestjs_pino_1 = require("nestjs-pino");
const firestore_module_1 = require("../firebase/firestore.module");
const collection_providers_1 = require("../firestore-document/collection.providers");
const firestore_provider_1 = require("../firebase/firestore.provider");
const user_module_1 = require("./users/user.module");
const collectionProviders = collection_providers_1.FirestoreCollectionProviders.map((providerName) => ({
    provide: providerName,
    useFactory: (db) => db.collection(providerName),
    inject: [firestore_provider_1.FirestoreDatabaseProvider],
}));
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [configuration_1.default],
                envFilePath: '.env',
            }),
            nestjs_pino_1.LoggerModule.forRoot({
                pinoHttp: { level: process.env.prod !== 'prod' ? 'trace' : 'info' },
            }),
            firestore_module_1.FirestoreModule.forRoot({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    keyFilename: configService.get('GOOGLE_CREDENTIALS'),
                }),
                inject: [config_1.ConfigService],
            }, collectionProviders),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map