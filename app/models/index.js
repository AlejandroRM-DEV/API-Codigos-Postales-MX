const Sequelize = require('sequelize');
const config = require('../config/db.config.js');

let sequelize;
if (process.env.CLEARDB_DATABASE_URL) {
  sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL, {
    dialect: config.dialect,
    operatorsAliases: '0',
    pool: config.pool,
  });
} else {
  sequelize = new Sequelize(config.db, config.user, config.password, {
    host: config.host,
    dialect: config.dialect,
    operatorsAliases: '0',
    pool: config.pool,
  });
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.CodigoPostal = require('./codigo.model.js')(sequelize, Sequelize);

module.exports = db;
