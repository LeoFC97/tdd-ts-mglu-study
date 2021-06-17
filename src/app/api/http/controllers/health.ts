import Controller from '../../../interfaces/http/controller';
import { HttpResponse } from '../../../interfaces/http/http';

class HealthController implements Controller {
  async handle(): Promise<HttpResponse> {
    try {
      const httpResponse = {
        body: {
          datetime: new Date(),
        },
        status: 200,
      };
      return httpResponse;
    } catch (err) {
      return {
        body: {
          err,
        },
        status: 500,
      };
    }
  }
}

export default HealthController;
