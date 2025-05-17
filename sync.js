const sequelize = require('./src/config/database');
const User = require('./src/models/user');
const Autor = require('./src/models/autores');
const Livro = require('./src/models/livros');

(async () => {
  try {
    await sequelize.sync({ force: true }); // Apaga e recria as tabelas

    // 👇 Inserir dados de teste
    await User.bulkCreate([
      { nome: 'Melda', email: 'melda@email.com', password: '123456' },
      { nome: 'Aleyna', email: 'aleyna@email.com', password: 'abcdef' }
    ]);

    await Autor.bulkCreate([
      { nome: 'Machado de Assis', email: 'machado@literatura.com' },
      { nome: 'Saramago', email: 'saramago@portugal.pt' }
    ]);

    await Livro.bulkCreate([
      { nome: 'Dom Casmurro' },
      { nome: 'Ensaio sobre a cegueira' }
    ]);

    console.log('Tabelas criadas e dados inseridos com sucesso.');
    process.exit();
  } catch (error) {
    console.error('Erro ao sincronizar a base de dados:', error);
  }
})();

