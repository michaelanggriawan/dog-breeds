import { Timestamp } from '@google-cloud/firestore';

export class UserDocument {
  static collectionName = 'users';
  username: string;
  email: string;
  password: string;
  createAt: Timestamp;
}
