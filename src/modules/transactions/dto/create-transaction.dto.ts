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
  readonly userId: string;
}
