const User = require('../models/user');

let tokens = []; // Apenas para testes ou desenvolvimento. Em produção, usar BD.

module.exports = {
  getAccessToken: async (accessToken) => {
    const token = tokens.find(t => t.accessToken === accessToken);
    return token || null;
  },

  getClient: async (clientId, clientSecret) => {
    // O client é fixo, só usamos o grant_type "password"
    return {
      id: clientId,
      grants: ['password'],
    };
  },

  saveToken: async (token, client, user) => {
    const accessToken = {
      accessToken: token.accessToken,
      accessTokenExpiresAt: token.accessTokenExpiresAt,
      client,
      user,
    };

    tokens.push(accessToken);
    return accessToken;
  },

  getUser: async (username, password) => {
    try {
      const user = await User.findOne({
        where: { email: username, password }, // Em produção: criptografia!
      });
      return user || null;
    } catch (error) {
      console.error('Erro ao buscar usuário para autenticação:', error);
      return null;
    }
  }
};
