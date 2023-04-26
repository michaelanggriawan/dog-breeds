import { Body, Controller, Post } from '@nestjs/common';
import { Serialize } from 'interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';
import { UsersService } from './user.service';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { SignInUserDto } from './dtos/sign-user.dto';

@Controller('auth')
@Serialize(UserDto)
export class UserController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Post('/signin')
  async signin(@Body() body: SignInUserDto) {
    const user = await this.authService.signin(body.email, body.password);
    return user;
  }

  @Post('/signup')
  async createUser(@Body() body: CreateUserDto) {
    const { email, username, password } = body;
    const user = await this.authService.signUp({ email, username, password });
    return user;
  }
}
