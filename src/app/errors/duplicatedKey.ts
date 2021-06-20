import BaseError from './base';

export default class DuplicatedKeyError extends BaseError {
  public name = 'Duplicated key';
  public message: string;

  constructor(msg: string) {
    super();
    this.message = msg;
  }
}
