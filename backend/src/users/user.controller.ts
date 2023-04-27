import { Body, Controller, Post } from '@nestjs/common';
import { Serialize } from 'interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { SignInUserDto } from './dtos/sign-user.dto';

@Controller({
  path: 'auth',
  version: '1',
})
@Serialize(UserDto)
export class UserController {
  constructor(private authService: AuthService) {}

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
