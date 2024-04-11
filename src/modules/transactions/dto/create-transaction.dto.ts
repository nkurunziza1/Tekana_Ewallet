import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateTransactionDto {
  @ApiProperty({
    description: 'Inter amount to send ',
    minimum: 1,
    default: '1600',
  })
  @IsNotEmpty()
  readonly amount: number;
  @ApiProperty({
    description: 'Enter receiver id ',
    minimum: 1,
    default: '66182e6e50de25831066bf59',
  })
  @IsNotEmpty()
  readonly to: string;
  readonly userId: string;
}
