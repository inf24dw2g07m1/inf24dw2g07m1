const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  githubId: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true
  },
  displayName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  // Se quiser manter password local para cadastro futuro (opcional)
  password: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'Users',
  timestamps: true
});

module.exports = User;



