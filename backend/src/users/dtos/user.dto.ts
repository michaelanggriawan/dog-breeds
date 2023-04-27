import { Expose } from 'class-transformer';

export class UserDto {
  @Expose()
  username: string;

  @Expose()
  email: string;

  @Expose()
  userId: string;

  @Expose()
  token: string;

  @Expose()
  expToken: number;
}
