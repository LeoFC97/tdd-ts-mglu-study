/* eslint-disable import/prefer-default-export */
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateClient1624138779144 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'client',
        columns: [
          {
            name: 'code',
            type: 'varchar(200)',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar(200)',
          },
          {
            name: 'cpf',
            type: 'varchar(11)',
          },
          {
            name: 'sexo',
            type: 'varchar(200)',
          },
          {
            name: 'email',
            type: 'varchar(200)',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('client');
  }
}
