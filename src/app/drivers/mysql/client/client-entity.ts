import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export default class Client {
  @PrimaryColumn()
  code!: string;

  @Column()
  name!: string;

  @Column()
  cpf!: string;

  @Column()
  sexo!: string;

  @Column()
  email!: string;
}
