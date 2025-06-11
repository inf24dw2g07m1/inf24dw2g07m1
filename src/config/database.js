const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, '../environment/', `${process.env.NODE_ENV}.env`)
});

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
    logging: console.log
  }
);

module.exports = sequelize;
