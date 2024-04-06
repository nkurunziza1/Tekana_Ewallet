import { Controller, Get } from "@nestjs/common";
import { Transaction } from "./interface/transaction.interface";

@Controller('transaction')

export class TransactionController {
@Get()
async findAll(): Promise<Transaction[]> {
    return []
}
}

