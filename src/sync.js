const sequelize = require('./config/database');
require('./models/user');

(async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Banco sincronizado com sucesso!');
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
