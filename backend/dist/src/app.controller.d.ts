import { AppService } from './app.service';
import { SaveBreedsDto } from './users/dtos/save-breeds.dto';
import { DeleteBreedsDto } from './users/dtos/delete-breeds.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getBreeds(): Promise<string[]>;
    saveBreeds(headers: {
        'x-user-id': string;
    }, body: SaveBreedsDto): Promise<import("../firestore-document/breeds.document").BreedsDocument>;
    getSaveBreeds(headers: {
        'x-user-id': string;
    }): Promise<import("../firestore-document/breeds.document").BreedsDocument>;
    deleteBreeds(headers: {
        'x-user-id': string;
    }, body: DeleteBreedsDto): Promise<import("../firestore-document/breeds.document").BreedsDocument>;
    getBreedImages(headers: {
        'x-user-id': string;
    }): Promise<{
        images: string[];
        breed: string;
    }[]>;
}
