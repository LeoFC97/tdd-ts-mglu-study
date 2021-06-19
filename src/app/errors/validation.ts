import BaseError from './base';

export default class ValidationError extends BaseError {
  public name = 'ValidationError';
  public message: string;

  constructor(msg: string) {
    super();
    this.message = msg;
  }
}
