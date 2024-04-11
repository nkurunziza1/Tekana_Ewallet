import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateWalletDto {
  @ApiProperty({
    description: 'create your wallet by interting the amount you want ',
    minimum: 1,
    default: 4000,
  })
  @IsNotEmpty()
  readonly amount: number;
}
