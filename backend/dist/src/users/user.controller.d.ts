import { UsersService } from './user.service';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { SignInUserDto } from './dtos/sign-user.dto';
export declare class UserController {
    private usersService;
    private authService;
    constructor(usersService: UsersService, authService: AuthService);
    signin(body: SignInUserDto): Promise<{
        token: string;
        expToken: number;
        userId: string;
        username: string;
        password: string;
        email: string;
    }>;
    createUser(body: CreateUserDto): Promise<{
        token: string;
        expToken: number;
        userId: string;
        username: string;
        email: string;
        password: string;
        createAt: FirebaseFirestore.Timestamp;
    }>;
}
