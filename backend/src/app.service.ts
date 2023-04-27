import {
  BadGatewayException,
  HttpException,
  Inject,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, lastValueFrom, map } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { CollectionReference } from '@google-cloud/firestore';
import { BreedsDocument } from 'firestore-document/breeds.document';

@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
    @InjectPinoLogger(AppService.name)
    private readonly logger: PinoLogger,
    @Inject(BreedsDocument.collectionName)
    private breedsCollection: CollectionReference<BreedsDocument>,
  ) {}

  async getBreeds() {
    console.log('Get Breeds');
    const response = await lastValueFrom(
      this.httpService
        .get(`${this.configService.get<string>('DOG_CEO_URL')}breeds/list/all`)
        .pipe(
          map((response) => response.data),
          catchError((err) => {
            this.logger.error(err);
            throw new HttpException(err.response.data, err.response.status);
          }),
        ),
    );

    this.logger.info('Get breeds');

    return Object.keys(response.message);
  }

  async saveBreeds({
    userId,
    selectedBreeds,
  }: {
    userId: string;
    selectedBreeds: Array<string>;
  }) {
    try {
      const docRef = this.breedsCollection.doc(userId);

      let result = (await docRef.get()).data();

      for (const breed of selectedBreeds) {
        if (result.selectedBreeds.includes(breed)) {
          throw new UnprocessableEntityException(`${breed} already added`);
        }
      }

      if (result.selectedBreeds.length + selectedBreeds.length > 3) {
        throw new BadGatewayException('Selected breed cannot more than 3');
      }

      if (result.selectedBreeds.length >= 3) {
        throw new UnprocessableEntityException(
          'Selected breed already up to 3',
        );
      }

      await docRef.set({
        selectedBreeds: [...result.selectedBreeds, ...selectedBreeds],
      });

      result = (await docRef.get()).data();

      this.logger.info(`${userId} save breeds`);
      return result;
    } catch (err) {
      this.logger.error(err);
      throw err;
    }
  }

  async deleteBreed({ userId, breed }: { userId: string; breed: string }) {
    const docRef = this.breedsCollection.doc(userId);
    let result = (await docRef.get()).data();

    if (!result.selectedBreeds.includes(breed)) {
      throw new NotFoundException(`${breed} doesn't exist`);
    }

    const selectedBreeds = result.selectedBreeds.filter((s) => s !== breed);

    await docRef.set({
      selectedBreeds: selectedBreeds,
    });

    result = (await docRef.get()).data();

    return result;
  }
}
