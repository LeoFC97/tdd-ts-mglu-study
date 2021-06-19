import Client from 'app/interfaces/entities/client/client';
import Product from 'app/interfaces/entities/product/product';
import {
  Entity, PrimaryColumn, Column, JoinTable,
} from 'typeorm';
import { PymentTypes } from '../../../interfaces/entities/order/order';

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

  @JoinTable()
  clientWhoDidOrder!: Client;

  @JoinTable()
  products!: Product[];
}
