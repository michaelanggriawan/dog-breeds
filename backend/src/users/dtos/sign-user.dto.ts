import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class SignInUserDto {
  @IsEmail()
  @ApiProperty({ example: 'michaelanggriawan941@gmail.com' })
  email: string;

  @IsString()
  @ApiProperty({ example: 'VUvv!D^28gpE9Whe' })
  password: string;
}
