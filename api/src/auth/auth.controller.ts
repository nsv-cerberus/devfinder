import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UnauthorizedException,
  BadRequestException,
  Res,
  Req,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';

interface LoginDto {
  username: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  data?: {
    id: string;
    username: string;
    email: string;
    // token больше не нужен - он в cookie
  };
  message?: string;
}

interface RegisterResponse {
  success: boolean;
  data?: {
    id: number;
    username: string;
    email: string;
    // token больше не нужен - он в cookie
  };
  message?: string;
}

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body() loginDto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<LoginResponse> {
    try {
      console.log('Received login request:', loginDto);

      // Ищем пользователя по username
      const user = await this.userService.findByUsername(loginDto.username);

      if (!user) {
        throw new UnauthorizedException('Неверный логин или пароль');
      }

      // Проверяем пароль
      const isPasswordValid = await this.userService.validatePassword(
        user.password,
        loginDto.password,
      );

      if (!isPasswordValid) {
        throw new UnauthorizedException('Неверный логин или пароль');
      }

      // Генерируем пару токенов
      const { accessToken, refreshToken } =
        this.authService.generateTokenPair(user);

      // Устанавливаем httpOnly cookie с access токеном
      res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // HTTPS только в production
        sameSite: 'strict',
        maxAge: 15 * 60 * 1000, // 15 минут
      });

      // TODO: Сохраняем refresh токен в Redis
      // await this.redisService.setRefreshToken(user.id.toString(), refreshToken);

      const response = {
        success: true,
        data: {
          id: user.id.toString(),
          username: user.username,
          email: user.email,
          // Токен НЕ отправляем в ответе - он в cookie!
        },
      };

      console.log('Sending response:', response);
      return response;
    } catch (error) {
      console.error('Login error:', error);
      if (error instanceof UnauthorizedException) {
        return {
          success: false,
          message: error.message,
        };
      }

      return {
        success: false,
        message: 'Ошибка сервера',
      };
    }
  }

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(
    @Body() registerDto: CreateUserDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<RegisterResponse> {
    try {
      console.log('Received register request:', registerDto);

      // Проверяем, что пользователь с таким username не существует
      const existingUserByUsername = await this.userService.findByUsername(
        registerDto.username,
      );
      if (existingUserByUsername) {
        throw new BadRequestException(
          'Пользователь с таким логином уже существует',
        );
      }

      // Проверяем, что пользователь с таким email не существует
      const existingUserByEmail = await this.userService.findByEmail(
        registerDto.email,
      );
      if (existingUserByEmail) {
        throw new BadRequestException(
          'Пользователь с таким email уже существует',
        );
      }

      // Создаем нового пользователя
      const user = await this.userService.create(registerDto);

      // Генерируем пару токенов
      const { accessToken, refreshToken } =
        this.authService.generateTokenPair(user);

      // Устанавливаем httpOnly cookie с access токеном
      res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 15 * 60 * 1000, // 15 минут
      });

      // TODO: Сохраняем refresh токен в Redis
      // await this.redisService.setRefreshToken(user.id.toString(), refreshToken);

      const response = {
        success: true,
        data: {
          id: user.id,
          username: user.username,
          email: user.email,
          // Токен НЕ отправляем в ответе
        },
      };

      console.log('Sending register response:', response);
      return response;
    } catch (error) {
      console.error('Register error:', error);
      if (error instanceof BadRequestException) {
        return {
          success: false,
          message: error.message,
        };
      }

      return {
        success: false,
        message: 'Ошибка сервера при регистрации',
      };
    }
  }
}
