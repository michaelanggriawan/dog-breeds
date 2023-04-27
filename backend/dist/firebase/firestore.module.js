"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var FirestoreModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirestoreModule = void 0;
const common_1 = require("@nestjs/common");
const firestore_1 = require("@google-cloud/firestore");
const firestore_provider_1 = require("./firestore.provider");
let FirestoreModule = FirestoreModule_1 = class FirestoreModule {
    static forRoot(options, collectionProviders) {
        const optionsProvider = {
            provide: firestore_provider_1.FirestoreOptionsProvider,
            useFactory: options.useFactory,
            inject: options.inject,
        };
        const dbProvider = {
            provide: firestore_provider_1.FirestoreDatabaseProvider,
            useFactory: (config) => new firestore_1.Firestore(config),
            inject: [firestore_provider_1.FirestoreOptionsProvider],
        };
        return {
            global: true,
            module: FirestoreModule_1,
            imports: options.imports,
            providers: [optionsProvider, dbProvider, ...collectionProviders],
            exports: [dbProvider, ...collectionProviders],
        };
    }
};
FirestoreModule = FirestoreModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({})
], FirestoreModule);
exports.FirestoreModule = FirestoreModule;
//# sourceMappingURL=firestore.module.js.map