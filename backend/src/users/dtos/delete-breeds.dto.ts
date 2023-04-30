import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class DeleteBreedsDto {
  @ApiProperty({ example: 'boxer' })
  @IsString()
  breed: string;
}
