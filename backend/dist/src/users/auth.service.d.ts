import { UsersService } from './user.service';
import { PinoLogger } from 'nestjs-pino';
export declare class AuthService {
    private usersService;
    private readonly logger;
    constructor(usersService: UsersService, logger: PinoLogger);
    signUp({ email, username, password, }: {
        email: string;
        username: string;
        password: string;
    }): Promise<{
        userId: string;
        username: string;
        email: string;
        password: string;
        createAt: FirebaseFirestore.Timestamp;
    }>;
    signin(email: string, password: string): Promise<{
        userId: string;
        username: string;
        password: string;
        email: string;
    }>;
}
