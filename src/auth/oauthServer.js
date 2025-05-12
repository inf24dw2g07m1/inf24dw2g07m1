const OAuth2Server = require('oauth2-server');

const oauth = new OAuth2Server({
  model: require('./oauthModel'),
  accessTokenLifetime: 3600,
  allowBearerTokensInQueryString: true
});

module.exports = oauth;
