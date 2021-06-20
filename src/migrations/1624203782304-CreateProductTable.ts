/* eslint-disable import/prefer-default-export */
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProductTable1624203782304 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'product',
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
            name: 'color',
            type: 'varchar(200)',
          },
          {
            name: 'size',
            type: 'varchar(200)',
          },
          {
            name: 'value',
            type: 'float',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('client');
  }
}
