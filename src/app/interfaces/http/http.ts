interface Query {
  [key: string]: undefined | string | string[] | Query | Query[];
}

interface HttpRequest {
  headers?: Record<string, string | string[] | undefined>;
  params?: Record<string, string>;
  query?: Query;
  body?: any;
}

interface HttpResponse {
  status: number;
  body: unknown;
}

export { HttpRequest, HttpResponse };
