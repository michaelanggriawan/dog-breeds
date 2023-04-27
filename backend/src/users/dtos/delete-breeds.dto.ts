import { IsString } from 'class-validator';

export class DeleteBreedsDto {
  @IsString()
  breed: string;
}
