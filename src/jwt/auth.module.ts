// auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [
    AuthService,
    JwtService,
    {
      provide: 'JWT_SECRET',
      useValue: '7329382', // Cung cấp khóa bí mật vào đây
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
