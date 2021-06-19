import Controller from '../../../interfaces/http/controller';
import { HttpResponse } from '../../../interfaces/http/http';
import MysqlDBManager from '../../../drivers/mysql/mysql-manager';

class HealthController implements Controller {
  async handle(): Promise<HttpResponse> {
    const mysqlDatabaseStatus = await MysqlDBManager.checkConnection();
    const httpResponse = {
      body: {
        datetime: new Date(),
        databaseIsConnected: mysqlDatabaseStatus,
      },
      status: mysqlDatabaseStatus ? 200 : 500,
    };
    return httpResponse;
  }
}

export default HealthController;
