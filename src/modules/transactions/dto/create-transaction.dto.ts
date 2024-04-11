import { IsNotEmpty } from 'class-validator';

export class CreateTransactionDto {
  @IsNotEmpty()
  readonly amount: number;
  @IsNotEmpty()
  readonly to: string;
  readonly userId: string;
}
