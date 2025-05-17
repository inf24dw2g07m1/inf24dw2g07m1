const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Livro = sequelize.define('Livro', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Livro;
