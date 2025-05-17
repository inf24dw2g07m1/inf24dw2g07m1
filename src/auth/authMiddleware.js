
const { Request, Response } = require('oauth2-server');
const oauth = require('./oauthServer');

module.exports = function authenticateRequest(req, res, next) {
  const request = new Request(req);
  const response = new Response(res);

  oauth.authenticate(request, response)
    .then(token => {
      req.user = token.user; // acessa o user autenticado se quiser
      next();
    })
    .catch(err => res.status(err.code || 500).json({ error: err.message }));
};
