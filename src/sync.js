
const sequelize = require('./config/database');
const User = require('./models/user');

sequelize.sync({ force: false })
  .then(() => {
    console.log('Tabelas sincronizadas!');
    process.exit();
  })
  .catch((err) => {
    console.error('Erro ao sincronizar tabelas:', err);
    process.exit(1);
});
