const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/usersRoutes');
const autorRoutes = require('./src/routes/autoresRoutes');
const livroRoutes = require('./src/routes/livrosRoutes');
const OAuth2Server = require('oauth2-server');
const oauth = require('./src/auth/oauthServer');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
const swaggerDocument = yaml.load('./docs/swagger.yaml');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rotas protegidas e públicas
app.use('/api/users', userRoutes);
app.use('/api/autores', autorRoutes);
app.use('/api/livros', livroRoutes);

// Endpoint para gerar token de acesso (OAuth2 - grant_type: password)
app.post('/oauth/token', (req, res) => {
  const request = new OAuth2Server.Request(req);
  const response = new OAuth2Server.Response(res);

  oauth.token(request, response)
    .then(token => res.json(token))
    .catch(err => res.status(err.code || 500).json(err));
});

// Teste simples
app.get('/', (req, res) => {
  res.send('API está a funcionar!');
});

module.exports = app;


