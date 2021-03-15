/* eslint-disable import/prefer-default-export */
import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class ConfirmationCollumns1615808309434 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('users', [
      new TableColumn({
        name: 'emailVerificationToken',
        type: 'varchar',
        isNullable: true,
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'emailVerificationToken');
  }
}
