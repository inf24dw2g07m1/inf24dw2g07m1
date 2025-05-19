const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: 3306, // Porta interna do container MySQL
    dialect: 'mysql',
    logging: console.log
  }
);

module.exports = sequelize;
