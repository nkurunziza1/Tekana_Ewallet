import { User } from './interface/user.interface';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UsersService);
    userRegister(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
}
