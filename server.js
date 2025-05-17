const app = require('./app');
const sequelize = require('./src/config/database');

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Banco de dados conectado com sucesso');
  } catch (error) {
    console.error('Erro ao conectar com o banco:', error);
  }
});
