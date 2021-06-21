import {
  Entity, PrimaryColumn, Column, OneToMany,
} from 'typeorm';
// eslint-disable-next-line import/no-cycle
import OrderProduct from '../orderProduct/orderProduct-entity';

@Entity()
export default class Product {
  @PrimaryColumn()
  code!: string;

  @Column()
  name!: string;

  @Column()
  color!: string;

  @Column()
  size!: string;

  @Column()
  value!: number;

  @OneToMany(() => OrderProduct,
    (orderProduct) => orderProduct.orderId)
  itens!:OrderProduct[];
}
