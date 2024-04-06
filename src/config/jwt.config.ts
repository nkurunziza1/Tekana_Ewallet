import { JwtModuleAsyncOptions } from '@nestjs/jwt';


export const jwtConfig: JwtModuleAsyncOptions = {
  useFactory: () => {
    return {
      secret: "bitwayeikise",
      signOptions: { expiresIn: '7d' },
    };
  },
};