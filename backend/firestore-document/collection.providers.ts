import { BreedsDocument } from './breeds.document';
import { UserDocument } from './user.document';
export const FirestoreCollectionProviders: string[] = [
  UserDocument.collectionName,
  BreedsDocument.collectionName,
];
