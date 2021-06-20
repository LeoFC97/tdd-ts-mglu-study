import BaseError from './base';

export default class ValidationError extends BaseError {
  public name = 'ValidationError';
  public message: string;
  public status: number;

  constructor(msg: string, status: number) {
    super();
    this.status = status;
    this.message = msg;
  }
}
