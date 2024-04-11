import { Body, Controller, Post, Request, Response } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@ApiTags('Authentication')
@Controller('/api/v1/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'User Login' })
  @ApiBody({ type: LoginDto })
  @ApiResponse({
    status: 200,
    description: 'User authenticated successfully',
  })
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
