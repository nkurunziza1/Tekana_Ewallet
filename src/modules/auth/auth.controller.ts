import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('/api/v1/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(
    @Request() req,
    @Response() res,
    @Body() loginDto: LoginDto,
  ): Promise<{}> {
    const data = await this.authService.validateUserCreds(
      loginDto.email,
      loginDto.password,
    );
    return res.status(200).json(data);
  }
}
