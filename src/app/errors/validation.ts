import BaseError from './base';

export default class ValidationError extends BaseError {
  public name = 'ValidationError';
  public message: string;
  public code: number;

  constructor(msg: string, code:number) {
    super();
    this.message = msg;
    this.code = code;
  }
}
