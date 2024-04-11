import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class LoginDto {
  @ApiProperty({
    description: "Enter your email ",
    minimum: 1,
    default: "alexendre3.nkurunziza@gmail.com"
  })
  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter correct email' })
  readonly email: string;
  @ApiProperty({
    description: "Enter your password ",
    minimum: 1,
    default: "123345"
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;
  readonly toke?: string;
}