const User = require('../models/user');

let tokens = []; // para fins didáticos, guardar tokens na memória

module.exports = {
  getAccessToken: async (accessToken) => {
    return tokens.find(t => t.accessToken === accessToken) || null;
  },

  getClient: async (clientId, clientSecret) => {
    return {
      id: clientId,
      grants: ['password']
    };
  },

  saveToken: async (token, client, user) => {
    const accessToken = {
      accessToken: token.accessToken,
      accessTokenExpiresAt: token.accessTokenExpiresAt,
      client: client,
      user: user
    };
    tokens.push(accessToken);
    return accessToken;
  },

  getUser: async (username, password) => {
    const user = await User.findOne({ where: { email: username, password } });
    return user ? user : null;
  }
};
