import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from 'guards/jwt-auth.guard';
import { SaveBreedsDto } from './users/dtos/save-breeds.dto';
import { DeleteBreedsDto } from './users/dtos/delete-breeds.dto';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiHeaders,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {
  BadRequestResponse,
  BreedsResponse,
  GetSelectedBreedResponse,
  InternalServerErrorResponse,
  SaveSelectedBreedsResponse,
  UnauthorizedResponse,
} from 'swagger/swagger.response';

@Controller({
  path: 'breeds',
  version: '1',
})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiInternalServerErrorResponse({ type: InternalServerErrorResponse })
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ type: UnauthorizedResponse })
  @ApiBadRequestResponse({ type: BadRequestResponse })
  @ApiHeaders([{ name: 'X-User-Id' }])
  @ApiOkResponse({ type: BreedsResponse })
  @Get()
  @UseGuards(JwtAuthGuard)
  getBreeds() {
    return this.appService.getBreeds();
  }

  @ApiInternalServerErrorResponse({ type: InternalServerErrorResponse })
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ type: UnauthorizedResponse })
  @ApiBadRequestResponse({ type: BadRequestResponse })
  @Post('/save')
  @ApiCreatedResponse({ type: SaveSelectedBreedsResponse })
  @ApiHeaders([{ name: 'X-User-Id' }])
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

  @ApiInternalServerErrorResponse({ type: InternalServerErrorResponse })
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ type: UnauthorizedResponse })
  @ApiBadRequestResponse({ type: BadRequestResponse })
  @Get('/save')
  @ApiCreatedResponse({ type: SaveSelectedBreedsResponse })
  @ApiHeaders([{ name: 'X-User-Id' }])
  @UseGuards(JwtAuthGuard)
  getSaveBreeds(@Headers() headers: { 'x-user-id': string }) {}

  @ApiInternalServerErrorResponse({ type: InternalServerErrorResponse })
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ type: UnauthorizedResponse })
  @ApiBadRequestResponse({ type: BadRequestResponse })
  @Delete('/save/breed')
  @ApiHeaders([{ name: 'X-User-Id' }])
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({ type: SaveSelectedBreedsResponse })
  deleteBreeds(
    @Headers() headers: { 'x-user-id': string },
    @Body() body: DeleteBreedsDto,
  ) {
    return this.appService.deleteBreed({
      breed: body.breed,
      userId: headers['x-user-id'],
    });
  }

  @ApiInternalServerErrorResponse({ type: InternalServerErrorResponse })
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ type: UnauthorizedResponse })
  @ApiBadRequestResponse({ type: BadRequestResponse })
  @Get('/images')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: GetSelectedBreedResponse })
  getBreedImages(@Headers() headers: { 'x-user-id': string }) {
    return this.appService.getRandomBreedImages({
      userId: headers['x-user-id'],
    });
  }
}
