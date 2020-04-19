module.exports = {
  host: process.env.HOST || 'localhost',
  user: process.env.USER || 'root',
  passowrd: process.env.PASSWORD || '',
  db: process.env.DB || 'codigos_postales',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
