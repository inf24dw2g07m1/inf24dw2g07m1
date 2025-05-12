const app = require('./src/app');
const sequelize = require('./src/config/database');

// Sincroniza as tabelas do banco 
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Banco sincronizado com sucesso.');

    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });
  })
  .catch((err) => {
    console.error('Erro ao sincronizar com o banco:', err);
  });
