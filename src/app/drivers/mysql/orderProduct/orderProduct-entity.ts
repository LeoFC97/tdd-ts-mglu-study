import {
  Entity, PrimaryColumn, Column, JoinTable, JoinColumn, OneToOne, ManyToOne,
} from 'typeorm';
import { PymentTypes } from '../../../interfaces/entities/order/order';
import Client from '../client/client-entity';
// eslint-disable-next-line import/no-cycle
import Product from '../product/product-entity';
// eslint-disable-next-line import/no-cycle
import Order from '../order/order-entity';

@Entity()
export default class OrderProduct {
  @PrimaryColumn()
  orderProductId!: string;

  @Column()
  quantity!:number;

  @ManyToOne(() => Product, (product) => product.code)
  productId!:Product;

  @ManyToOne(() => Order, (order) => order.code)
  orderId!:Order;
}
