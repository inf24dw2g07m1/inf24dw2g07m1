const sequelize = require('./src/config/database');
const User = require('./src/models/user');
const Autor = require('./src/models/autores');
const Livro = require('./src/models/livros');

async function seed() {
  try {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate([
      { nome: 'Ana Paula Martins', email: 'ana.martins@example.com', password: '123456' },
      { nome: 'Bruno Oliveira', email: 'bruno.oliveira@example.com', password: '123456' },
      { nome: 'Carla Souza', email: 'carla.souza@example.com', password: '123456' },
      { nome: 'Daniel Rocha', email: 'daniel.rocha@example.com', password: '123456' },
      { nome: 'Eduarda Pires', email: 'eduarda.pires@example.com', password: '123456' },
      { nome: 'Fábio Lima', email: 'fabio.lima@example.com', password: '123456' },
      { nome: 'Gabriela Costa', email: 'gabriela.costa@example.com', password: '123456' },
      { nome: 'Henrique Ferreira', email: 'henrique.ferreira@example.com', password: '123456' },
      { nome: 'Isabela Dias', email: 'isabela.dias@example.com', password: '123456' },
      { nome: 'João Pedro Almeida', email: 'joao.almeida@example.com', password: '123456' },
      { nome: 'Karen Monteiro', email: 'karen.monteiro@example.com', password: '123456' },
      { nome: 'Lucas Ramos', email: 'lucas.ramos@example.com', password: '123456' },
      { nome: 'Mariana Borges', email: 'mariana.borges@example.com', password: '123456' },
      { nome: 'Nelson Cardoso', email: 'nelson.cardoso@example.com', password: '123456' },
      { nome: 'Otávio Martins', email: 'otavio.martins@example.com', password: '123456' },
      { nome: 'Patrícia Gomes', email: 'patricia.gomes@example.com', password: '123456' },
      { nome: 'Ricardo Teixeira', email: 'ricardo.teixeira@example.com', password: '123456' },
      { nome: 'Sara Menezes', email: 'sara.menezes@example.com', password: '123456' },
      { nome: 'Tiago Barbosa', email: 'tiago.barbosa@example.com', password: '123456' },
      { nome: 'Ursula Figueiredo', email: 'ursula.figueiredo@example.com', password: '123456' },
      { nome: 'Vanessa Duarte', email: 'vanessa.duarte@example.com', password: '123456' },
      { nome: 'Wesley Pinheiro', email: 'wesley.pinheiro@example.com', password: '123456' },
      { nome: 'Xavier Monteiro', email: 'xavier.monteiro@example.com', password: '123456' },
      { nome: 'Yara Nascimento', email: 'yara.nascimento@example.com', password: '123456' },
      { nome: 'Zilda Lopes', email: 'zilda.lopes@example.com', password: '123456' },
      { nome: 'André Soares', email: 'andre.soares@example.com', password: '123456' },
      { nome: 'Beatriz Faria', email: 'beatriz.faria@example.com', password: '123456' },
      { nome: 'Caio Nunes', email: 'caio.nunes@example.com', password: '123456' },
      { nome: 'Débora Martins', email: 'debora.martins@example.com', password: '123456' },
      { nome: 'Enzo Tavares', email: 'enzo.tavares@example.com', password: '123456' },
    ]);

    const autores = await Autor.bulkCreate([
      { nome: 'José Saramago', email: 'saramago@literatura.pt' },
      { nome: 'Mia Couto', email: 'mia.couto@mozambique.mz' },
      { nome: 'Fernando Pessoa', email: 'fernando.pessoa@poesia.pt' },
      { nome: 'Chico Buarque', email: 'chico@musica.br' },
      { nome: 'Clarice Lispector', email: 'clarice.lispector@brasil.br' },
      { nome: 'Machado de Assis', email: 'machado@literatura.br' },
      { nome: 'Cecília Meireles', email: 'cecilia@poesia.br' },
      { nome: 'Luís de Camões', email: 'camoes@epopeia.pt' },
      { nome: 'Lygia Fagundes Telles', email: 'lygia.telles@literatura.br' },
      { nome: 'Rubem Fonseca', email: 'rubem.fonseca@brasil.br' },
      { nome: 'Jorge Amado', email: 'jorge.amado@bahia.br' },
      { nome: 'Paulo Coelho', email: 'paulo.coelho@autoajuda.br' },
      { nome: 'Lobo Antunes', email: 'lobo.antunes@romance.pt' },
      { nome: 'Pepetela', email: 'pepetela@angola.ao' },
      { nome: 'Raduan Nassar', email: 'raduan.nassar@brasil.br' },
    ]);

    await Livro.bulkCreate([
      { nome: 'Memorial do Convento', autorId: 1, userId: 1 },
      { nome: 'Terra Sonâmbula', autorId: 2, userId: 2 },
      { nome: 'O Livro do Desassossego', autorId: 3, userId: 3 },
      { nome: 'Budapeste', autorId: 4, userId: 4 },
      { nome: 'A Hora da Estrela', autorId: 5, userId: 5 },
      { nome: 'Dom Casmurro', autorId: 6, userId: 6 },
      { nome: 'Romanceiro da Inconfidência', autorId: 7, userId: 7 },
      { nome: 'Os Lusíadas', autorId: 8, userId: 8 },
      { nome: 'As Meninas', autorId: 9, userId: 9 },
      { nome: 'Agosto', autorId: 10, userId: 10 },
      { nome: 'Gabriela, Cravo e Canela', autorId: 11, userId: 11 },
      { nome: 'O Alquimista', autorId: 12, userId: 12 },
      { nome: 'O Manual dos Inquisidores', autorId: 13, userId: 13 },
      { nome: 'Mayombe', autorId: 14, userId: 14 },
      { nome: 'Lavoura Arcaica', autorId: 15, userId: 15 },
    ]);

    console.log("Dados inseridos com sucesso!");
    process.exit(0);
  } catch (error) {
    console.error("Erro ao inserir dados:", error);
    process.exit(1);
  }
}

seed();