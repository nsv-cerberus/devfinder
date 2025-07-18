import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class RedisService {
  private redis: Redis;

  constructor() {
    this.redis = new Redis({
      host: process.env.REDIS_HOST || 'localhost',
      port: parseInt(process.env.REDIS_PORT || '6379'),
    });
  }

  async setRefreshToken(userId: string, token: string, ttl: number = 604800): Promise<void> {
    // TTL в секундах (604800 = 7 дней)
    await this.redis.setex(`refresh_token:${userId}`, ttl, token);
  }

  async getRefreshToken(userId: string): Promise<string | null> {
    return await this.redis.get(`refresh_token:${userId}`);
  }

  async deleteRefreshToken(userId: string): Promise<void> {
    await this.redis.del(`refresh_token:${userId}`);
  }

  async blacklistToken(token: string, ttl: number = 900): Promise<void> {
    // TTL в секундах (900 = 15 минут - время жизни access token)
    await this.redis.setex(`blacklist:${token}`, ttl, 'true');
  }

  async isTokenBlacklisted(token: string): Promise<boolean> {
    const result = await this.redis.get(`blacklist:${token}`);
    return result === 'true';
  }

  async setUserSession(userId: string, sessionData: object, ttl: number = 86400): Promise<void> {
    // TTL в секундах (86400 = 24 часа)
    await this.redis.setex(`session:${userId}`, ttl, JSON.stringify(sessionData));
  }

  async getUserSession(userId: string): Promise<object | null> {
    const session = await this.redis.get(`session:${userId}`);
    return session ? JSON.parse(session) : null;
  }

  async deleteUserSession(userId: string): Promise<void> {
    await this.redis.del(`session:${userId}`);
  }
}
