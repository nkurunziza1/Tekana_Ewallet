import { IS_LENGTH, IsEmail, IsNotEmpty, Length, max } from "class-validator";


export class CreateUserDto {
  @IsNotEmpty()
  readonly name: string;
  @IsEmail({}, { message: 'Please enter correct email' })
  readonly email: string;
  @IsNotEmpty()
  @Length(10, 12)
  readonly telephone: string;
  @IsNotEmpty()
  readonly password: string;
}
