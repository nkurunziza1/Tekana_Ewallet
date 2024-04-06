import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { User } from './interface/user.interface';
import { UsersService } from './user.service';
import { HttpCode } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('/api/v1/users')
export class UserController {
  constructor(private readonly userService: UsersService) {}
  @HttpCode(HttpStatus.OK)
  @Post('/signup')

  async userRegister(@Body() createUserDto:CreateUserDto): Promise<User>{
    return this.userService.userRegister(createUserDto)
  }
  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
