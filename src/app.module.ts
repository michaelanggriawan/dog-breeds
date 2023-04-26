import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from 'config/configuration';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: '.env',
    }),
    LoggerModule.forRoot({
      pinoHttp: { level: process.env.prod !== 'prod' ? 'trace' : 'info' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
