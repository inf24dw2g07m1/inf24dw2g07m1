const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Livro = sequelize.define('Livro', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  autorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Autores', // o nome da tabela no banco
      key: 'id',
    },
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', // o nome da tabela no banco
      key: 'id',
    },
  },
}, {
  tableName: 'Livros',
  timestamps: true,
});

module.exports = Livro;
