import { HttpResponse, HttpRequest } from './http';

interface Controller {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse>;
}

export default Controller;
