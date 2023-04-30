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
      const breedAndImage: Array<{ breed: string; image: string }> = [];

      const isExist = (await docRef.get()).exists;

      let result = isExist
        ? (await docRef.get()).data()
        : { selectedBreeds: [] };

      for (const breed of selectedBreeds) {
        for (const item of result.selectedBreeds) {
          if (item.breed === breed) {
            throw new UnprocessableEntityException(`${breed} already added`);
          }
        }
        const response = await lastValueFrom(
          this.httpService
            .get(
              `${this.configService.get<string>(
                'DOG_CEO_URL',
              )}breed/${breed}/images/random`,
            )
            .pipe(
              map((response) => response.data),
              catchError((err) => {
                this.logger.error(err);
                throw new HttpException(err.response.data, err.response.status);
              }),
            ),
        );

        breedAndImage.push({ image: response.message, breed });
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
        selectedBreeds: [...result.selectedBreeds, ...breedAndImage],
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

    for (const [key, value] of Object.entries(result)) {
      if (key === 'breed' && value === breed) {
        throw new NotFoundException(`${breed} doesn't exist`);
      }
    }

    const selectedBreeds = result.selectedBreeds.filter(
      (s) => s.breed !== breed,
    );

    await docRef.set({
      selectedBreeds: selectedBreeds,
    });

    result = (await docRef.get()).data();

    return result;
  }

  async getRandomBreedImages({ userId }: { userId: string }) {
    const docRef = this.breedsCollection.doc(userId);
    const isExist = (await docRef.get()).exists;

    if (!isExist) throw new NotFoundException("You don't have selected breeds");

    const result = (await docRef.get()).data();
    const images: Array<{ images: Array<string>; breed: string }> = [];

    if (result.selectedBreeds.length < 0)
      throw new NotFoundException("You don't have selected breeds");

    const maxImage = 3;
    for (const breed of result.selectedBreeds) {
      const response = await lastValueFrom(
        this.httpService
          .get(
            `${this.configService.get<string>('DOG_CEO_URL')}breed/${
              breed.breed
            }/images/random/${maxImage}`,
          )
          .pipe(
            map((response) => response.data),
            catchError((err) => {
              this.logger.error(err);
              throw new HttpException(err.response.data, err.response.status);
            }),
          ),
      );
      images.push({
        images: response.message,
        breed: breed.breed,
      });
    }
    return images;
  }
}
