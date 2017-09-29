const db_configs = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

const server_port = process.env.SERVER_PORT;

const jwt_secret = process.env.JWT_SECRET;

module.exports = {
  db: db_configs,
  port: server_port,
  jwt_secret,
};
