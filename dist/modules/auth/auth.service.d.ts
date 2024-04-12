import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/user.service';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    validateUserCreds(email: string, password: string): Promise<any>;
    generateToken(user: any): {
        access_token: string;
    };
}
