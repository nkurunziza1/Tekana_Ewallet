
## Tekana_Ewallet

## Description
This an application that helps customers to transfer and receive  money

## Strategies

- ## User Registeration:
  when the user want to transfer or receive money through  our app must have an account on our app
  after creating account we require him/her to login and generate  token to be used on authorizing
  and authentication

- ## Login:
  after successfull Login we allow him to create wallet on our account and start to transfer and
  receive the money


- ## wallet:
- 
   - ## create wallet:
     client will create wallet by filling the amount of money he want to start with.

       - ## best practice:
         - Note: if it is not loggedIn he will not be able to create wallet

   - ## Check wallet:
     client will be able to  check  his/her wallet remaining amount

   - ## Update wallet:
     client should be able to update his wallet as long as the amount decreased in his wallet or
     any time he/she want

     
- ## Transaction
- 
  - ## Send money (Transfer money):
    Once User have Wallet can  transfer and receive the money
     ## Note:
       if client doesn't  have the wallet could not recieve and transfer the money

  - ## Monitor transaction:
     check all the transaction that you make. once You have logged in

 ## Mannual Testing
## Installation
```bash
$ clone repo
```

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
