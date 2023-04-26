import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UsersService } from './user.service';
import { AuthService } from './auth.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UsersService, AuthService],
})
export class UserModule {}
