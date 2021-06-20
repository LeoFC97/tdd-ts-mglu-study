import BaseError from './base';

export default class DuplicatedKeyError extends BaseError {
  public name = 'Duplicated key';
  public message: string;
  public status: number;

  constructor(msg: string, status: number) {
    super();
    this.status = status;
    this.message = msg;
  }
}
