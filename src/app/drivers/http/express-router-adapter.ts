import { Request, Response, NextFunction } from 'express';
import Controller from '../../interfaces/http/controller';

class ExpressRouterAdapter {
  static adapt(controller: Controller) {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        const httpRequest = {
          headers: req.headers,
          params: req.params,
          body: req.body,
          query: req.query,
        };
        const httpResponse = await controller.handle(httpRequest);
        res.status(httpResponse.status).json(httpResponse.body);
      } catch (err) {
        next(err);
      }
    };
  }
}

export const { adapt } = ExpressRouterAdapter;
export default ExpressRouterAdapter;
