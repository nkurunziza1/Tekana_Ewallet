import { IS_LENGTH, IsEmail, IsNotEmpty, Length, max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: ' Your name',
    minimum: 1,
    default: 'Nkurunziza Alexandre',
  })
  @IsNotEmpty()
  readonly name: string;
  @ApiProperty({
    description: 'your prefered email',
    minimum: 1,
    default: 'alexendre3.nkurunziza@gmail.com',
  })
  @IsEmail({}, { message: 'Please enter correct email' })
  readonly email: string;
  @ApiProperty({
    description: 'Your telephone number',
    minimum: 1,
    default: '0783186898',
  })
  @IsNotEmpty()
  @Length(10, 12)
  readonly telephone: string;
  @ApiProperty({
    description: 'create strong password,',
    minimum: 1,
    default: '123345',
  })
  @IsNotEmpty()
  readonly password: string;
}
