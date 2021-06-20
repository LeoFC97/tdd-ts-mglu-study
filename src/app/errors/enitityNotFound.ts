import BaseError from './base';

export default class EnitityNotFound extends BaseError {
  public name = 'EnitityNotFound, check your query';
  public message: string;
  public status: number;

  constructor(msg: string, status: number) {
    super();
    this.status = status;
    this.message = msg;
  }
}
