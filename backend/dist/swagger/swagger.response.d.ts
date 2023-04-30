export declare class UsersSignIn {
    email: string;
    username: string;
    userId: string;
    accessToken: string;
    expToken: number;
}
export declare class SelectedBreedsArray {
    breed: string;
    image: string;
}
export declare class SelectedBreeds {
    selectedBreeds: Array<{
        breed: string;
        image: string;
    }>;
}
export declare class UserSignInResponse {
    statusCode: number;
    success: boolean;
    data: Record<string, string>;
}
export declare class SaveSelectedBreedsResponse {
    statusCode: number;
    success: boolean;
    data: Record<string, string>;
}
export declare class BreedsResponse {
    statusCode: number;
    success: boolean;
    data: Array<string>;
}
export declare class SelectedBreedsImage {
    images: Array<string>;
    breed: string;
}
export declare class GetSelectedBreedResponse {
    statusCode: number;
    success: boolean;
    data: Record<string, string>;
}
export declare class UserError {
    message: string;
}
export declare class UnprocessableEntityResponse {
    statusCode: number;
    success: boolean;
    error: UserError[];
}
export declare class UnauthorizedResponse {
    statusCode: number;
    success: boolean;
    error: UserError[];
}
export declare class InternalServerErrorResponse {
    statusCode: number;
    success: boolean;
    error: UserError[];
}
export declare class NotFoundResponse {
    statusCode: number;
    success: boolean;
    error: UserError[];
}
export declare class BadRequestResponse {
    statusCode: number;
    success: boolean;
    error: UserError[];
}
