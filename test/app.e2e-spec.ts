import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { WalletService } from 'src/modules/wallet/wallet.service';
import { WalletModule } from 'src/modules/wallet/wallet.module';
import { TransactionService } from 'src/modules/transactions/transaction.service';

describe('Wallets', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [WalletModule],
      providers: [
        {
          provide: WalletService,
          useValue: {
            getWalletByUserId: jest.fn(),
            updateWalletBalance: jest.fn(),
          },
        },
        {
          provide: TransactionService,
          useValue: {
            createTransaction: jest.fn(),
          },
        },
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should create a transaction successfully', async () => {
    const senderId = 'senderUserId';
    const receiverId = 'receiverUserId';
    const amount = 100;

    const walletService = app.get<WalletService>(WalletService);
    const transactionService = app.get<TransactionService>(TransactionService);

    jest
      .spyOn(walletService, 'getWalletByUserId')
      .mockResolvedValueOnce({ amount: 200 } as any);
    jest
      .spyOn(walletService, 'updateWalletBalance')
      .mockResolvedValueOnce(null);
    jest
      .spyOn(walletService, 'updateWalletBalance')
      .mockResolvedValueOnce(null);
    jest
      .spyOn(transactionService, 'createTransaction')
      .mockResolvedValueOnce(null);

    await request(app.getHttpServer())
      .post('/transactions')
      .send({ amount, to: receiverId })
      .expect(201);

    expect(walletService.getWalletByUserId).toHaveBeenCalledWith(senderId);
    expect(walletService.getWalletByUserId).toHaveBeenCalledWith(receiverId);
    expect(walletService.updateWalletBalance).toHaveBeenCalledWith(
      senderId,
      100,
    );
    expect(walletService.updateWalletBalance).toHaveBeenCalledWith(
      receiverId,
      100,
    );
    expect(transactionService.createTransaction).toHaveBeenCalledWith(
      senderId,
      receiverId,
      amount,
    );
  });

  afterAll(async () => {
    await app.close();
  });
});
