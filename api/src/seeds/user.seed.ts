import { User, UserType } from '../user/user.entity';
import { DataSource } from 'typeorm';
import * as argon2 from 'argon2';

export async function seedUsers(dataSource: DataSource) {
  const userRepository = dataSource.getRepository(User);

  // Проверяем, есть ли уже пользователи
  const existingUsers = await userRepository.count();
  if (existingUsers > 0) {
    console.log('Users already exist, skipping seed');
    return;
  }

  // Создаем тестовых пользователей
  const testUsers = [
    {
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
      userType: UserType.DEVELOPER,
    },
    {
      username: 'admin',
      email: 'admin@example.com',
      password: 'admin123',
      userType: UserType.STUDIO,
    },
    {
      username: 'demo',
      email: 'demo@example.com',
      password: 'demo123',
      userType: UserType.DEVELOPER,
    },
  ];

  for (const userData of testUsers) {
    const hashedPassword = await argon2.hash(userData.password, {
      type: argon2.argon2id,
      timeCost: 3,
      memoryCost: 1 << 16,
      parallelism: 1,
    });

    const user = userRepository.create({
      ...userData,
      password: hashedPassword,
      isConfirmed: true,
    });

    await userRepository.save(user);
    console.log(`Created user: ${userData.username}`);
  }

  console.log('Seed completed successfully');
}
