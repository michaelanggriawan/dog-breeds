import { Timestamp } from '@google-cloud/firestore';
export declare class UserDocument {
    static collectionName: string;
    username: string;
    email: string;
    password: string;
    createAt: Timestamp;
}
