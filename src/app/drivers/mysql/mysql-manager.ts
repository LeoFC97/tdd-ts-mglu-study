import {
  createConnection, Connection, getConnection,
} from 'typeorm';

import { mysql } from '../../../config/enviroment';

export default class MysqlDBManager {
  static async initialize(): Promise <Connection> {
    try {
      const connection = await createConnection({
        type: 'mysql',
        host: mysql.host,
        port: Number(mysql.port),
        username: mysql.username,
        password: mysql.password,
        database: mysql.database,
        entities: [
          '**/*-entity.ts',
        ],
      });
      console.log('Connected to Mysql Database');
      return connection;
    } catch ({ message }) {
      console.log(message);
      return message;
    }
  }
  static async checkConnection(): Promise <boolean> {
    const connecion = await getConnection().isConnected;
    return connecion;
  }
  static async closeConnection(): Promise <boolean> {
    try {
      await getConnection().close;
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
