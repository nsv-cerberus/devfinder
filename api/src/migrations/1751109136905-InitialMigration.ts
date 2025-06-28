import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1751109136905 implements MigrationInterface {
  name = 'InitialMigration1751109136905';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Создаем enum для типа пользователя
    await queryRunner.query(
      `CREATE TYPE "public"."user_usertype_enum" AS ENUM('developer', 'studio')`,
    );

    // Добавляем новые поля в существующую таблицу user
    await queryRunner.query(
      `ALTER TABLE "user" ADD "userType" "public"."user_usertype_enum" NOT NULL DEFAULT 'developer'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "isConfirmed" boolean NOT NULL DEFAULT false`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Удаляем добавленные поля
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updatedAt"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createdAt"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isConfirmed"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "userType"`);

    // Удаляем enum тип
    await queryRunner.query(`DROP TYPE "public"."user_usertype_enum"`);
  }
}
