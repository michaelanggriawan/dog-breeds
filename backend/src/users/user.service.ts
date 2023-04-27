import { CollectionReference, Timestamp } from '@google-cloud/firestore';
import { Inject, Injectable } from '@nestjs/common';
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

    return { ...response, userId: (await (await docRef).get()).id };
  }

  async find({
    email,
    username,
  }: {
    email?: string;
    username?: string;
  }): Promise<{
    userId: string;
    username: string;
    password: string;
    email: string;
  }> {
    let result: UserDocument & { userId: string };
    const docRef = this.usersCollection;
    const response = await docRef.get();
    response.forEach((doc) => {
      if (doc.data().email === email || username === doc.data().username) {
        result = { ...doc.data(), userId: doc.id };
      }
    });

    return result;
  }
}
