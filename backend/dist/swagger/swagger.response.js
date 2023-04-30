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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestResponse = exports.NotFoundResponse = exports.InternalServerErrorResponse = exports.UnauthorizedResponse = exports.UnprocessableEntityResponse = exports.UserError = exports.GetSelectedBreedResponse = exports.SelectedBreedsImage = exports.BreedsResponse = exports.SaveSelectedBreedsResponse = exports.UserSignInResponse = exports.SelectedBreeds = exports.SelectedBreedsArray = exports.UsersSignIn = void 0;
const swagger_1 = require("@nestjs/swagger");
class UsersSignIn {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'michaelanggriawan@gmail.com' }),
    __metadata("design:type", String)
], UsersSignIn.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'michaelanggriawan' }),
    __metadata("design:type", String)
], UsersSignIn.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Twz9G4u3iT1WKg8Zfyk0' }),
    __metadata("design:type", String)
], UsersSignIn.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImJkODgxZDhmMjNhYjM1NWM0ZDY0NGU3YWE2ZTYzOTNiMGU5MDAyZTgifQ.eyJ1c2VySWQiOiJUd3o5RzR1M2lUMVdLZzhaZnlrMCIsImVtYWlsIjoibWljaGFlbGFuZ2dyaWF3YW45NDNAZ21haWwuY29tIiwiaXNzIjoiZmlyZWJhc2UtYWRtaW5zZGstdDExNDhAYnJlZWRzLTU5YjcwLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwic3ViIjoiZmlyZWJhc2UtYWRtaW5zZGstdDExNDhAYnJlZWRzLTU5YjcwLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwiaWF0IjoxNjgyODU4MzM3LCJleHAiOjE2ODI5NDQ3Mzd9.i5XJKOxIDJ7AygggqjbpBngsBRbFWEwdW7CKbgJZRU9aSj0f5ouXt19_Clw_MEu-8HFRra16_q5YeDAsyM-t32ZS_4YU68mCo6zQYjnHdsD7H_1YTsVbpJ7ok5PvlIAvVJVxMNTTS-tkuiig27bvn606L4PPaLzYZdfmSH4M_yblY3hpLZUsuYbxyT9kWre__agQMaGX2a_D6r7mpwarIXyt8XqTdO7qA8AqDBGFvXMWyB9TY3EluvZB5A_Qr5ClSNy2r1jURn57p7Fv3vZpZ3Ht-FiY6d1WNevYDZl3B3V0O_LTiEuTuzLa6butYrmbWXhHoR9-eifwbP7ywqNMJA',
    }),
    __metadata("design:type", String)
], UsersSignIn.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1682944737,
    }),
    __metadata("design:type", Number)
], UsersSignIn.prototype, "expToken", void 0);
exports.UsersSignIn = UsersSignIn;
class SelectedBreedsArray {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'beagle',
    }),
    __metadata("design:type", String)
], SelectedBreedsArray.prototype, "breed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://images.dog.ceo/breeds/beagle/n02088364_15690.jpg',
    }),
    __metadata("design:type", String)
], SelectedBreedsArray.prototype, "image", void 0);
exports.SelectedBreedsArray = SelectedBreedsArray;
class SelectedBreeds {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        isArray: true,
        type: SelectedBreedsArray,
    }),
    __metadata("design:type", Array)
], SelectedBreeds.prototype, "selectedBreeds", void 0);
exports.SelectedBreeds = SelectedBreeds;
class UserSignInResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '200' }),
    __metadata("design:type", Number)
], UserSignInResponse.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], UserSignInResponse.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: UsersSignIn }),
    __metadata("design:type", Object)
], UserSignInResponse.prototype, "data", void 0);
exports.UserSignInResponse = UserSignInResponse;
class SaveSelectedBreedsResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '201' }),
    __metadata("design:type", Number)
], SaveSelectedBreedsResponse.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], SaveSelectedBreedsResponse.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: SelectedBreeds }),
    __metadata("design:type", Object)
], SaveSelectedBreedsResponse.prototype, "data", void 0);
exports.SaveSelectedBreedsResponse = SaveSelectedBreedsResponse;
class BreedsResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '200' }),
    __metadata("design:type", Number)
], BreedsResponse.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], BreedsResponse.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            'affenpinscher',
            'african',
            'airedale',
            'akita',
            'appenzeller',
            'australian',
            'basenji',
            'beagle',
            'bluetick',
            'borzoi',
            'bouvier',
            'boxer',
            'brabancon',
            'briard',
            'buhund',
            'bulldog',
            'bullterrier',
            'cattledog',
            'chihuahua',
            'chow',
            'clumber',
            'cockapoo',
            'collie',
            'coonhound',
            'corgi',
            'cotondetulear',
            'dachshund',
            'dalmatian',
            'dane',
            'deerhound',
            'dhole',
            'dingo',
            'doberman',
            'elkhound',
            'entlebucher',
            'eskimo',
            'finnish',
            'frise',
            'germanshepherd',
            'greyhound',
            'groenendael',
            'havanese',
            'hound',
            'husky',
            'keeshond',
            'kelpie',
            'komondor',
            'kuvasz',
            'labradoodle',
            'labrador',
            'leonberg',
            'lhasa',
            'malamute',
            'malinois',
            'maltese',
            'mastiff',
            'mexicanhairless',
            'mix',
            'mountain',
            'newfoundland',
            'otterhound',
            'ovcharka',
            'papillon',
            'pekinese',
            'pembroke',
            'pinscher',
            'pitbull',
            'pointer',
            'pomeranian',
            'poodle',
            'pug',
            'puggle',
            'pyrenees',
            'redbone',
            'retriever',
            'ridgeback',
            'rottweiler',
            'saluki',
            'samoyed',
            'schipperke',
            'schnauzer',
            'segugio',
            'setter',
            'sharpei',
            'sheepdog',
            'shiba',
            'shihtzu',
            'spaniel',
            'spitz',
            'springer',
            'stbernard',
            'terrier',
            'tervuren',
            'vizsla',
            'waterdog',
            'weimaraner',
            'whippet',
            'wolfhound',
        ],
    }),
    __metadata("design:type", Array)
], BreedsResponse.prototype, "data", void 0);
exports.BreedsResponse = BreedsResponse;
class SelectedBreedsImage {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            'https://images.dog.ceo/breeds/beagle/n02088364_11136.jpg',
            'https://images.dog.ceo/breeds/beagle/n02088364_12440.jpg',
            'https://images.dog.ceo/breeds/beagle/n02088364_13627.jpg',
        ],
    }),
    __metadata("design:type", Array)
], SelectedBreedsImage.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'beagle',
    }),
    __metadata("design:type", String)
], SelectedBreedsImage.prototype, "breed", void 0);
exports.SelectedBreedsImage = SelectedBreedsImage;
class GetSelectedBreedResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '200' }),
    __metadata("design:type", Number)
], GetSelectedBreedResponse.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], GetSelectedBreedResponse.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: SelectedBreedsImage }),
    __metadata("design:type", Object)
], GetSelectedBreedResponse.prototype, "data", void 0);
exports.GetSelectedBreedResponse = GetSelectedBreedResponse;
class UserError {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'string' }),
    __metadata("design:type", String)
], UserError.prototype, "message", void 0);
exports.UserError = UserError;
class UnprocessableEntityResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '422' }),
    __metadata("design:type", Number)
], UnprocessableEntityResponse.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], UnprocessableEntityResponse.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        isArray: true,
        type: UserError,
    }),
    __metadata("design:type", Array)
], UnprocessableEntityResponse.prototype, "error", void 0);
exports.UnprocessableEntityResponse = UnprocessableEntityResponse;
class UnauthorizedResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '401' }),
    __metadata("design:type", Number)
], UnauthorizedResponse.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], UnauthorizedResponse.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        isArray: true,
        type: UserError,
    }),
    __metadata("design:type", Array)
], UnauthorizedResponse.prototype, "error", void 0);
exports.UnauthorizedResponse = UnauthorizedResponse;
class InternalServerErrorResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '500' }),
    __metadata("design:type", Number)
], InternalServerErrorResponse.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], InternalServerErrorResponse.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        isArray: true,
        type: UserError,
    }),
    __metadata("design:type", Array)
], InternalServerErrorResponse.prototype, "error", void 0);
exports.InternalServerErrorResponse = InternalServerErrorResponse;
class NotFoundResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '404' }),
    __metadata("design:type", Number)
], NotFoundResponse.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], NotFoundResponse.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        isArray: true,
        type: UserError,
    }),
    __metadata("design:type", Array)
], NotFoundResponse.prototype, "error", void 0);
exports.NotFoundResponse = NotFoundResponse;
class BadRequestResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '400' }),
    __metadata("design:type", Number)
], BadRequestResponse.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], BadRequestResponse.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        isArray: true,
        type: UserError,
    }),
    __metadata("design:type", Array)
], BadRequestResponse.prototype, "error", void 0);
exports.BadRequestResponse = BadRequestResponse;
//# sourceMappingURL=swagger.response.js.map