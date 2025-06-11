const sequelize = require('./src/config/database');
const User = require('./src/models/user');
const Autor = require('./src/models/autores');
const Livro = require('./src/models/livros');

async function connectWithRetry(retries = 5, delay = 5000) {
  while (retries) {
    try {
      await sequelize.authenticate();
      console.log(' Conexão com o banco estabelecida.');
      break;
    } catch (err) {
      console.error(` Erro ao conectar com o banco: ${err.message}`);
      retries--;
      console.log(` Tentando novamente em ${delay / 1000} segundos... (${retries} restantes)`);
      await new Promise(res => setTimeout(res, delay));
    }
  }

  if (!retries) {
    console.error(' Falha ao conectar ao banco após várias tentativas.');
    process.exit(1);
  }
}

(async () => {
  await connectWithRetry();

  try {
    await sequelize.sync({ force: false });
    console.log(' Tabelas sincronizadas com sucesso.');
    process.exit();
  } catch (error) {
    console.error(' Erro ao sincronizar tabelas:', error);
    process.exit(1);
  }
})();
