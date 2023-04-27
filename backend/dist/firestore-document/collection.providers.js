"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirestoreCollectionProviders = void 0;
const breeds_document_1 = require("./breeds.document");
const user_document_1 = require("./user.document");
exports.FirestoreCollectionProviders = [
    user_document_1.UserDocument.collectionName,
    breeds_document_1.BreedsDocument.collectionName,
];
//# sourceMappingURL=collection.providers.js.map