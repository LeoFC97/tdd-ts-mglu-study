import Controller from '../../../interfaces/http/controller';
import { HttpResponse } from '../../../interfaces/http/http';
import MysqlDBManager from '../../../drivers/mysql/mysql-manager';

class HealthController implements Controller {
  async handle(): Promise<HttpResponse> {
    console.log('mysqlDatabaseStatus');

    const mysqlDatabaseStatus = await MysqlDBManager.checkConnection();
    console.log(mysqlDatabaseStatus);
    const httpResponse = {
      body: {
        datetime: new Date(),
        databaseIsConnected: mysqlDatabaseStatus,
      },
      status: mysqlDatabaseStatus ? 200 : 500,
    };
    console.log(httpResponse);
    return httpResponse;
  }
}

export default HealthController;
