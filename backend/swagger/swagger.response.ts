import { ApiProperty } from '@nestjs/swagger';

export class UsersSignIn {
  @ApiProperty({ example: 'michaelanggriawan@gmail.com' })
  email: string;

  @ApiProperty({ example: 'michaelanggriawan' })
  username: string;

  @ApiProperty({ example: 'Twz9G4u3iT1WKg8Zfyk0' })
  userId: string;

  @ApiProperty({
    example:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImJkODgxZDhmMjNhYjM1NWM0ZDY0NGU3YWE2ZTYzOTNiMGU5MDAyZTgifQ.eyJ1c2VySWQiOiJUd3o5RzR1M2lUMVdLZzhaZnlrMCIsImVtYWlsIjoibWljaGFlbGFuZ2dyaWF3YW45NDNAZ21haWwuY29tIiwiaXNzIjoiZmlyZWJhc2UtYWRtaW5zZGstdDExNDhAYnJlZWRzLTU5YjcwLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwic3ViIjoiZmlyZWJhc2UtYWRtaW5zZGstdDExNDhAYnJlZWRzLTU5YjcwLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwiaWF0IjoxNjgyODU4MzM3LCJleHAiOjE2ODI5NDQ3Mzd9.i5XJKOxIDJ7AygggqjbpBngsBRbFWEwdW7CKbgJZRU9aSj0f5ouXt19_Clw_MEu-8HFRra16_q5YeDAsyM-t32ZS_4YU68mCo6zQYjnHdsD7H_1YTsVbpJ7ok5PvlIAvVJVxMNTTS-tkuiig27bvn606L4PPaLzYZdfmSH4M_yblY3hpLZUsuYbxyT9kWre__agQMaGX2a_D6r7mpwarIXyt8XqTdO7qA8AqDBGFvXMWyB9TY3EluvZB5A_Qr5ClSNy2r1jURn57p7Fv3vZpZ3Ht-FiY6d1WNevYDZl3B3V0O_LTiEuTuzLa6butYrmbWXhHoR9-eifwbP7ywqNMJA',
  })
  accessToken: string;

  @ApiProperty({
    example: 1682944737,
  })
  expToken: number;
}

export class SelectedBreedsArray {
  @ApiProperty({
    example: 'beagle',
  })
  breed: string;

  @ApiProperty({
    example: 'https://images.dog.ceo/breeds/beagle/n02088364_15690.jpg',
  })
  image: string;
}

export class SelectedBreeds {
  @ApiProperty({
    isArray: true,
    type: SelectedBreedsArray,
  })
  selectedBreeds: Array<{ breed: string; image: string }>;
}

export class UserSignInResponse {
  @ApiProperty({ example: '200' })
  statusCode: number;

  @ApiProperty({ example: true })
  success: boolean;

  @ApiProperty({ type: UsersSignIn })
  data: Record<string, string>;
}

export class SaveSelectedBreedsResponse {
  @ApiProperty({ example: '201' })
  statusCode: number;

  @ApiProperty({ example: true })
  success: boolean;

  @ApiProperty({ type: SelectedBreeds })
  data: Record<string, string>;
}

export class GetSaveSelectedBreedsResponse {
  @ApiProperty({ example: '200' })
  statusCode: number;

  @ApiProperty({ example: true })
  success: boolean;

  @ApiProperty({ type: SelectedBreeds })
  data: Record<string, string>;
}

export class BreedsResponse {
  @ApiProperty({ example: '200' })
  statusCode: number;

  @ApiProperty({ example: true })
  success: boolean;

  @ApiProperty({
    example: [
      'affenpinscher',
      'african',
      'airedale',
      'akita',
      'appenzeller',
      'australian',
      'basenji',
      'beagle',
      'bluetick',
      'borzoi',
      'bouvier',
      'boxer',
      'brabancon',
      'briard',
      'buhund',
      'bulldog',
      'bullterrier',
      'cattledog',
      'chihuahua',
      'chow',
      'clumber',
      'cockapoo',
      'collie',
      'coonhound',
      'corgi',
      'cotondetulear',
      'dachshund',
      'dalmatian',
      'dane',
      'deerhound',
      'dhole',
      'dingo',
      'doberman',
      'elkhound',
      'entlebucher',
      'eskimo',
      'finnish',
      'frise',
      'germanshepherd',
      'greyhound',
      'groenendael',
      'havanese',
      'hound',
      'husky',
      'keeshond',
      'kelpie',
      'komondor',
      'kuvasz',
      'labradoodle',
      'labrador',
      'leonberg',
      'lhasa',
      'malamute',
      'malinois',
      'maltese',
      'mastiff',
      'mexicanhairless',
      'mix',
      'mountain',
      'newfoundland',
      'otterhound',
      'ovcharka',
      'papillon',
      'pekinese',
      'pembroke',
      'pinscher',
      'pitbull',
      'pointer',
      'pomeranian',
      'poodle',
      'pug',
      'puggle',
      'pyrenees',
      'redbone',
      'retriever',
      'ridgeback',
      'rottweiler',
      'saluki',
      'samoyed',
      'schipperke',
      'schnauzer',
      'segugio',
      'setter',
      'sharpei',
      'sheepdog',
      'shiba',
      'shihtzu',
      'spaniel',
      'spitz',
      'springer',
      'stbernard',
      'terrier',
      'tervuren',
      'vizsla',
      'waterdog',
      'weimaraner',
      'whippet',
      'wolfhound',
    ],
  })
  data: Array<string>;
}

export class SelectedBreedsImage {
  @ApiProperty({
    example: [
      'https://images.dog.ceo/breeds/beagle/n02088364_11136.jpg',
      'https://images.dog.ceo/breeds/beagle/n02088364_12440.jpg',
      'https://images.dog.ceo/breeds/beagle/n02088364_13627.jpg',
    ],
  })
  images: Array<string>;

  @ApiProperty({
    example: 'beagle',
  })
  breed: string;
}

export class GetSelectedBreedResponse {
  @ApiProperty({ example: '200' })
  statusCode: number;

  @ApiProperty({ example: true })
  success: boolean;

  @ApiProperty({ type: SelectedBreedsImage })
  data: Record<string, string>;
}

export class UserError {
  @ApiProperty({ example: 'string' })
  message: string;
}

export class UnprocessableEntityResponse {
  @ApiProperty({ example: '422' })
  statusCode: number;

  @ApiProperty({ example: false })
  success: boolean;

  @ApiProperty({
    isArray: true,
    type: UserError,
  })
  error: UserError[];
}

export class UnauthorizedResponse {
  @ApiProperty({ example: '401' })
  statusCode: number;

  @ApiProperty({ example: false })
  success: boolean;

  @ApiProperty({
    isArray: true,
    type: UserError,
  })
  error: UserError[];
}

export class InternalServerErrorResponse {
  @ApiProperty({ example: '500' })
  statusCode: number;

  @ApiProperty({ example: false })
  success: boolean;

  @ApiProperty({
    isArray: true,
    type: UserError,
  })
  error: UserError[];
}

export class NotFoundResponse {
  @ApiProperty({ example: '404' })
  statusCode: number;

  @ApiProperty({ example: false })
  success: boolean;

  @ApiProperty({
    isArray: true,
    type: UserError,
  })
  error: UserError[];
}

export class BadRequestResponse {
  @ApiProperty({ example: '400' })
  statusCode: number;

  @ApiProperty({ example: false })
  success: boolean;

  @ApiProperty({
    isArray: true,
    type: UserError,
  })
  error: UserError[];
}
