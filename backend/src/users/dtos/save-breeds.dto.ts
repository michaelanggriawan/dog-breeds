import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';

export class SaveBreedsDto {
  @IsArray()
  @ApiProperty({ example: ['beagle', 'boxer'] })
  selectedBreeds: Array<string>;
}
