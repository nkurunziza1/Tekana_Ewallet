import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { User } from './interface/user.interface';
import { UsersService } from './user.service';
import { HttpCode } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('/api/v1/users')
export class UserController {
  constructor(private readonly userService: UsersService) {}
  @HttpCode(HttpStatus.OK)
  @Post('/signup')
  @ApiOperation({ summary: 'User registration' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User registered successfully',
    type: CreateUserDto,
  })
  @HttpCode(HttpStatus.OK)
  @Post('/signup')
  async userRegister(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.userRegister(createUserDto);
  }
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of all users',
    type: [CreateUserDto],
  })
  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
