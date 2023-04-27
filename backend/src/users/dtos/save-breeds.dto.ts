import { IsArray } from 'class-validator';

export class SaveBreedsDto {
  @IsArray()
  selectedBreeds: Array<string>;
}
