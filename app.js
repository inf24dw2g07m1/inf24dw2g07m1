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
    oauth: {
        clientId: '542578077652-7c662u1ujlbk015fdrqcvo1i9ro31fh1.apps.googleusercontent.com',
        scopes: 'openid email profile' 
    }
}
));

// Rotas da API
router.use('/users', userRoutes);
router.use('/autores', autorRoutes);
router.use('/livros', livroRoutes);

module.exports = router;





