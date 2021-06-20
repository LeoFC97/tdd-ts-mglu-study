import BaseError from './base';

export default class EnitityNotFound extends BaseError {
  public name = 'Internal server error';
  public message: string;
  public status: number;

  constructor(msg: string, status: number) {
    super();
    this.status = status;
    this.message = msg;
  }
}
