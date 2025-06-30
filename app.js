const express = require('express');
const router = express.Router();

const userRoutes = require('./src/routes/usersRoutes');
const autorRoutes = require('./src/routes/autoresRoutes');
const livroRoutes = require('./src/routes/livrosRoutes');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
const { isLoggedIn } = require('./src/routes/auth');
const swaggerDocument = yaml.load('./docs/swagger.yaml');

// Proteção Swagger
router.use('/docs', isLoggedIn, swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
  swaggerOptions: {
    oauth2RedirectUrl: 'http://localhost:3000/auth/github/callback',
  },
  oauth: {
    clientId: process.env.GITHUB_CLIENT_ID, // ou direto a string, se preferir
    scopes: 'read:user user',
  }
}));


// Rotas da API
router.use('/users', userRoutes);
router.use('/autores', autorRoutes);
router.use('/livros', livroRoutes);

module.exports = router;





