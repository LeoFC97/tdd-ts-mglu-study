import {
  Entity, PrimaryColumn, Column, JoinTable, JoinColumn, OneToOne, OneToMany,
} from 'typeorm';
import { PymentTypes } from '../../../interfaces/entities/order/order';
import Client from '../client/client-entity';
// eslint-disable-next-line import/no-cycle
import OrderProduct from '../orderProduct/orderProduct-entity';

@Entity()
export default class Order {
  @PrimaryColumn()
  code!: string;

  @Column()
  date!: Date;

  @Column()
  comentary!: string;

  @Column({
    type: 'enum',
    enum: PymentTypes,
  })
  paymentForm!: PymentTypes;

  @OneToOne(() => Client)
  @JoinColumn()
  clientId!: Client;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.orderProductId)
  itensId!:OrderProduct[];
}
