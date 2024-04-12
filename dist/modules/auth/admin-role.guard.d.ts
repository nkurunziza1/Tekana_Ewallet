import { CanActivate, ExecutionContext } from '@nestjs/common';
import { UsersService } from '../users/user.service';
export declare class AdminRoleGuard implements CanActivate {
    private userService;
    constructor(userService: UsersService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
