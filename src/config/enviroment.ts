export const mysql = {
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USERNAME || 'admin',
  password: process.env.MYSQL_PASSWORD || 'root',
  database: process.env.MYSQL_DATABASE || 'store',
  port: process.env.MYSQL_PORT || '3306',
};

export const server = {
  port: process.env.SERVICE_PORT || '3000',
};
