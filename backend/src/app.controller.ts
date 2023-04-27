import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from 'guards/jwt-auth.guard';
import { SaveBreedsDto } from './users/dtos/save-breeds.dto';

@Controller({
  path: 'breeds',
  version: '1',
})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  getBreeds() {
    return this.appService.getBreeds();
  }

  @Post('/save')
  @UseGuards(JwtAuthGuard)
  saveBreeds(
    @Headers() headers: { 'x-user-id': string },
    @Body() body: SaveBreedsDto,
  ) {
    return this.appService.saveBreeds({
      selectedBreeds: body.selectedBreeds,
      userId: headers['x-user-id'],
    });
  }
}
