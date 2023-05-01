import { CollectionReference, Timestamp } from '@google-cloud/firestore';
import { UserDocument } from 'firestore-document/user.document';
export declare class UsersService {
    private usersCollection;
    constructor(usersCollection: CollectionReference<UserDocument>);
    create({ email, username, password, }: {
        email: string;
        username: string;
        password: string;
    }): Promise<{
        userId: string;
        username: string;
        email: string;
        password: string;
        createAt: Timestamp;
    }>;
    find({ email, username, }: {
        email?: string;
        username?: string;
    }): Promise<{
        userId: string;
        username: string;
        password: string;
        email: string;
    }>;
    findById({ userId }: {
        userId: string;
    }): Promise<{
        userId: string;
        username: string;
        email: string;
        password: string;
        createAt: Timestamp;
    }>;
}
