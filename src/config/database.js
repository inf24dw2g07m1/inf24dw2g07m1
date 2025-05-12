const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME || 'inf25dw2g07',
  process.env.DB_USER || 'user',
  process.env.DB_PASSWORD || 'userpass',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql'
  }
);

module.exports = sequelize;
