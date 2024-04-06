import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './interface/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(@Inject('USER_MODEL') private readonly userModel: Model<User>) {}

  async userRegister(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const { email } = createUserDto;
    const emailExist = await this.userModel.findOne({ email });
    if (emailExist) {
      throw new ConflictException('Email already exists');
    }

    const createdUser = this.userModel.create({
      ...createUserDto,
      password: hashedPassword,
    });
    return createdUser;
  }
  async getUserByEmail(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ email });
  }
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUserById(id: number): Promise<User | undefined> {
    return this.userModel.findById({ id });
  }
}
