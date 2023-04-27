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
exports.UsersService = void 0;
const firestore_1 = require("@google-cloud/firestore");
const common_1 = require("@nestjs/common");
const user_document_1 = require("../../firestore-document/user.document");
let UsersService = class UsersService {
    constructor(usersCollection) {
        this.usersCollection = usersCollection;
    }
    async create({ email, username, password, }) {
        const docRef = this.usersCollection.add({
            username,
            email,
            password,
            createAt: firestore_1.Timestamp.fromMillis(Date.now()),
        });
        const response = (await (await docRef).get()).data();
        return Object.assign(Object.assign({}, response), { userId: (await (await docRef).get()).id });
    }
    async find({ email, username, }) {
        let result;
        const docRef = this.usersCollection;
        const response = await docRef.get();
        response.forEach((doc) => {
            if (doc.data().email === email || username === doc.data().username) {
                result = Object.assign(Object.assign({}, doc.data()), { userId: doc.id });
            }
        });
        return result;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(user_document_1.UserDocument.collectionName)),
    __metadata("design:paramtypes", [firestore_1.CollectionReference])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=user.service.js.map