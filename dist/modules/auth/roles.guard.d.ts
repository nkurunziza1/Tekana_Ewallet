import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UsersService } from '../users/user.service';
export declare class RolesGuard implements CanActivate {
    private reflector;
    private userService;
    constructor(reflector: Reflector, userService: UsersService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
