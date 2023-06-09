import {
  Body,
  Controller,
  Post,
  Headers,
  Get,
  UseGuards,
} from '@nestjs/common';
import { Serialize } from 'interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { SignInUserDto } from './dtos/sign-user.dto';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiHeaders,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {
  BadRequestResponse,
  InternalServerErrorResponse,
  UnauthorizedResponse,
  UserSignInResponse,
} from 'swagger/swagger.response';
import { JwtAuthGuard } from 'guards/jwt-auth.guard';

@Controller({
  path: 'auth',
  version: '1',
})
@Serialize(UserDto)
export class UserController {
  constructor(private authService: AuthService) {}

  @ApiInternalServerErrorResponse({ type: InternalServerErrorResponse })
  @ApiUnauthorizedResponse({ type: UnauthorizedResponse })
  @ApiBadRequestResponse({ type: BadRequestResponse })
  @ApiOkResponse({ type: UserSignInResponse })
  @Post('/signin')
  async signin(@Body() body: SignInUserDto) {
    const user = await this.authService.signin(body.email, body.password);
    return user;
  }

  @ApiInternalServerErrorResponse({ type: InternalServerErrorResponse })
  @ApiUnauthorizedResponse({ type: UnauthorizedResponse })
  @ApiBadRequestResponse({ type: BadRequestResponse })
  @ApiOkResponse({ type: UserSignInResponse })
  @Post('/signup')
  async createUser(@Body() body: CreateUserDto) {
    const { email, username, password } = body;
    const user = await this.authService.signUp({ email, username, password });
    return user;
  }

  @ApiInternalServerErrorResponse({ type: InternalServerErrorResponse })
  @ApiUnauthorizedResponse({ type: UnauthorizedResponse })
  @ApiBadRequestResponse({ type: BadRequestResponse })
  @ApiOkResponse({ type: UserSignInResponse })
  @ApiHeaders([{ name: 'X-User-Id' }])
  @ApiBearerAuth()
  @Get('/user')
  @UseGuards(JwtAuthGuard)
  getUser(@Headers() headers: { 'x-user-id': string }) {
    return this.authService.getUser({ userId: headers['x-user-id'] });
  }
}
