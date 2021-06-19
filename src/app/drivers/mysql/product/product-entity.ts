import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export default class Product {
  @PrimaryColumn()
  code!: string;

  @Column()
  name!: string;

  @Column()
  color!: string;

  @Column()
  sexo!: string;

  @Column()
  size!: string;

  @Column()
  value!: number;
}
