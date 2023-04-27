import { AppService } from './app.service';
import { SaveBreedsDto } from './users/dtos/save-breeds.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getBreeds(): Promise<string[]>;
    saveBreeds(headers: {
        'x-user-id': string;
    }, body: SaveBreedsDto): Promise<import("../firestore-document/breeds.document").BreedsDocument>;
}
