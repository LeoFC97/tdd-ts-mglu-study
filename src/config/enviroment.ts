export const mysql = {
  host: process.env.MYSQL_HOST || 'localhost',
  username: process.env.MYSQL_USERNAME || 'root',
  password: process.env.MYSQL_PASSWORD || 'root',
  database: process.env.MYSQL_DATABASE || 'store',
  port: process.env.MYSQL_PORT || '3306',
};

export const server = {
  port: process.env.SERVICE_PORT || '3000',
};

export const externalServices = {
  sparkPost: {
    apiKey: process.env.SPARK_POST_API_KEY || 'mocked',
    defaultEmail: process.env.SPARK_POST_DEFAULT_EMAIL,
  },
};
