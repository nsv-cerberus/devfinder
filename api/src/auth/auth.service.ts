import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.entity';
import { v4 as uuidv4 } from 'uuid';

export interface JwtPayload {
  id: number;
  username: string;
  email: string;
  type: 'access' | 'refresh';
}

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
}

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  generateTokenPair(user: User): TokenPair {
    // Access token - короткий (15 минут)
    const accessPayload: JwtPayload = {
      id: user.id,
      username: user.username,
      email: user.email,
      type: 'access',
    };

    // Refresh token - длинный (7 дней) с уникальным ID
    const refreshPayload: JwtPayload = {
      id: user.id,
      username: user.username,
      email: user.email,
      type: 'refresh',
    };

    const accessToken = this.jwtService.sign(accessPayload, {
      expiresIn: '15m',
    });
    const refreshToken = this.jwtService.sign(refreshPayload, {
      expiresIn: '7d',
    });

    return { accessToken, refreshToken };
  }

  verifyToken(token: string): JwtPayload {
    return this.jwtService.verify(token);
  }

  generateRefreshToken(): string {
    return uuidv4();
  }
}
