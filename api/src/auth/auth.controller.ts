import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
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
    token: string;
  };
  message?: string;
}

interface RegisterResponse {
  success: boolean;
  data?: {
    id: number;
    username: string;
    email: string;
    token: string;
  };
  message?: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto): Promise<LoginResponse> {
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

      // Генерируем mock JWT токен
      const token = 'mock-jwt-token-' + Date.now();

      const response = {
        success: true,
        data: {
          id: user.id.toString(),
          username: user.username,
          email: user.email,
          token: token,
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

      // Генерируем mock JWT токен
      const token = 'mock-jwt-token-' + Date.now();

      const response = {
        success: true,
        data: {
          id: user.id,
          username: user.username,
          email: user.email,
          token: token,
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
