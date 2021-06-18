import Controller from '../../../interfaces/http/controller';
import { HttpResponse } from '../../../interfaces/http/http';
import MysqlDBManager from '../../../drivers/mysql/mysql-manager';

class HealthController implements Controller {
  async handle(): Promise<HttpResponse> {
    try {
      const mysqlDatabaseStatus = await MysqlDBManager.checkConnection();
      const httpResponse = {
        body: {
          datetime: new Date(),
          databaseIsConnected: mysqlDatabaseStatus,
        },
        status: mysqlDatabaseStatus ? 200 : 500,
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
