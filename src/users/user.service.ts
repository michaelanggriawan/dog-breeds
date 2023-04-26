import { CollectionReference, Timestamp } from '@google-cloud/firestore';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UserDocument } from 'firestore-document/user.document';

@Injectable()
export class UsersService {
  constructor(
    @Inject(UserDocument.collectionName)
    private usersCollection: CollectionReference<UserDocument>,
  ) {}

  async create({
    email,
    username,
    password,
  }: {
    email: string;
    username: string;
    password: string;
  }) {
    const docRef = this.usersCollection.add({
      username,
      email,
      password,
      createAt: Timestamp.fromMillis(Date.now()),
    });
    const response = (await (await docRef).get()).data();

    return response;
  }

  async find(email: string) {
    let result;
    const docRef = this.usersCollection;
    const response = await docRef.get();
    response.forEach((doc) => {
      if (doc.data().email === email) {
        result = doc.data();
      }
    });

    return result;
  }
}
