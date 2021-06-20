import BaseError from './base';

export default class ServiceUnavailable extends BaseError {
  public name = 'Service Unavailable error';
  public message: string;
  public status: number;

  constructor(msg: string, status: number) {
    super();
    this.status = status;
    this.message = msg;
  }
}
