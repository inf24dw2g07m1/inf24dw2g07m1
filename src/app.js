const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/usersRoutes');
const OAuth2Server = require('oauth2-server');
const oauth = require('./auth/oauthServer');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', userRoutes);

app.post('/oauth/token', (req, res, next) => {
  const request = new OAuth2Server.Request(req);
  const response = new OAuth2Server.Response(res);

  oauth.token(request, response)
    .then(token => res.json(token))
    .catch(err => res.status(err.code || 500).json(err));
});

app.get('/', (req, res) => {
  res.send('API funcionando!');
});

module.exports = app;
