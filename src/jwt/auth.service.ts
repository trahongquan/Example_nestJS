import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @Inject('JWT_SECRET') private readonly jwtSecret: string,
  ) {}
  async createToken(payload: any): Promise<string> {
    // Sử dụng khóa bí mật để ký token
    const jwt = require('jsonwebtoken');
    const token = jwt.sign(payload, this.jwtSecret);
    return token;
  }

  async validateUser(username: string, password: string): Promise<any> {
    // Placeholder logic to validate user credentials (e.g., querying database)
    if (username === 'trhquan' && password === '123@abcdE') {
      return { userId: 1, username: 'user' };
    }
    return null;
  }

  async login(user: any): Promise<{ accessToken: string }> {
    const validatedUser = await this.validateUser(user.username, user.password);
    if (validatedUser !== null) {
      const payload = { username: user.username, sub: validatedUser.userId };
      return {
        accessToken: this.jwtService.sign(payload),
      };
    } else {
      throw new Error('Invalid credentials');
    }
  }

  async register(user: User): Promise<string> {
    // Placeholder logic to register a new user (e.g., save to database)
    // This is just a simple example, you should hash the password before saving it.
    return 'User registered successfully';
  }
}
