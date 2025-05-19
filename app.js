const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/usersRoutes');
const autorRoutes = require('./src/routes/autoresRoutes');
const livroRoutes = require('./src/routes/livrosRoutes');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
const swaggerDocument = yaml.load('./docs/swagger.yaml');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rotas públicas (sem autenticação)
app.use('/api/users', userRoutes);
app.use('/api/autores', autorRoutes);
app.use('/api/livros', livroRoutes);

// Teste simples
app.get('/', (req, res) => {
  res.send('API está a funcionar!');
});

module.exports = app;



