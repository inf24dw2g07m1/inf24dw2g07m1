const sequelize = require('./src/config/database');
const User = require('./src/models/user');
const Autor = require('./src/models/autores');
const Livro = require('./src/models/livros');

(async () => {
  try {
    await sequelize.sync({ force: false }); // usa o force: true para deletar e recriar tudo
    console.log('Tabelas sincronizadas com sucesso.');
    process.exit();
  } catch (error) {
    console.error('Erro ao sincronizar tabelas:', error);
    process.exit(1);
  }
})();

