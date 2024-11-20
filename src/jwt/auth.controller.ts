import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../users/user.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() user: User) {
    console.log(user);
    return this.authService.login(user);
  }

  @Post('register')
  async register(@Body() user: User) {
    return this.authService.register(user);
  }
}
