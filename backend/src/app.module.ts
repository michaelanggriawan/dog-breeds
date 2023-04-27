import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from 'config/configuration';
import { LoggerModule } from 'nestjs-pino';
import { FirestoreModule } from 'firebase/firestore.module';
import { FirestoreCollectionProviders } from 'firestore-document/collection.providers';
import { FirestoreDatabaseProvider } from 'firebase/firestore.provider';
import { UserModule } from './users/user.module';

const collectionProviders = FirestoreCollectionProviders.map(
  (providerName) => ({
    provide: providerName,
    useFactory: (db) => db.collection(providerName),
    inject: [FirestoreDatabaseProvider],
  }),
);

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: '.env',
    }),
    LoggerModule.forRoot({
      pinoHttp: { level: process.env.prod !== 'prod' ? 'trace' : 'info' },
    }),
    FirestoreModule.forRoot(
      {
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => ({
          keyFilename: configService.get<string>('GOOGLE_CREDENTIALS'),
        }),
        inject: [ConfigService],
      },
      collectionProviders,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
