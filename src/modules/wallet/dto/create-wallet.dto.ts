import { IsNotEmpty } from "class-validator";

export class CreateWalletDto {
    @IsNotEmpty()
    readonly amount: number;
}
 