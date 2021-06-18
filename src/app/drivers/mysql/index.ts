import MysqlDBManager from './mysql-manager';

export default async function start(): Promise<void> {
  await MysqlDBManager.initialize();
}
