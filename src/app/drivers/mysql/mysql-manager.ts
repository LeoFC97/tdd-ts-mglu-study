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
      return message;
    }
  }
  static async checkConnection(): Promise <boolean> {
    try {
      const connecion = await getConnection().isConnected;
      return connecion;
    } catch (error) {
      return false;
    }
  }
  static async closeConnection(): Promise <boolean> {
    try {
      await getConnection().close;
      return true;
    } catch (error) {
      return false;
    }
  }
}
