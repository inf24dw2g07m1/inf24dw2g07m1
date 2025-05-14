const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const Autor = sequelize.define('Autor', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  }

});

module.exports = Autor;
