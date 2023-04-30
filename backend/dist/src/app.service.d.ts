import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { PinoLogger } from 'nestjs-pino';
import { CollectionReference } from '@google-cloud/firestore';
import { BreedsDocument } from 'firestore-document/breeds.document';
export declare class AppService {
    private readonly httpService;
    private configService;
    private readonly logger;
    private breedsCollection;
    constructor(httpService: HttpService, configService: ConfigService, logger: PinoLogger, breedsCollection: CollectionReference<BreedsDocument>);
    getBreeds(): Promise<string[]>;
    saveBreeds({ userId, selectedBreeds, }: {
        userId: string;
        selectedBreeds: Array<string>;
    }): Promise<BreedsDocument>;
    getSaveBreeds({ userId }: {
        userId: string;
    }): Promise<void>;
    deleteBreed({ userId, breed }: {
        userId: string;
        breed: string;
    }): Promise<BreedsDocument>;
    getRandomBreedImages({ userId }: {
        userId: string;
    }): Promise<{
        images: Array<string>;
        breed: string;
    }[]>;
}
