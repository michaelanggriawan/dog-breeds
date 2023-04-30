import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @ApiProperty({ example: 'michaelanggriawan941@gmail.com' })
  email: string;

  @IsString()
  @ApiProperty({ example: 'michaelanggriawan' })
  username: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @ApiProperty({ example: 'VUvv!D^28gpE9Whe' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;
}
