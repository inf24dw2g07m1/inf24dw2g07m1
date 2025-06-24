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
app.use('/api/docs', isLoggedIn, swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
  oauthOptions: {
    clientId: 'Ov23lihcv1P8d877iJEk',
    scopes: 'read:user user'
  },
  oauth2RedirectUrl: 'http://localhost:3000/auth/github/callback'
}));


// Rotas da API
router.use('/users', userRoutes);
router.use('/autores', autorRoutes);
router.use('/livros', livroRoutes);

module.exports = router;





