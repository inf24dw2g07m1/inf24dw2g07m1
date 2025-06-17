const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '../../environment/', `${process.env.NODE_ENV || 'dev'}.env`)
});

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/user');

//  Estratégia de autenticação local
passport.use(new LocalStrategy({
  usernameField: 'email'
}, async (email, password, done) => {
  try {
    const user = await User.findOne({ where: { email } });
    if (!user || !user.password) {
      return done(null, false, { message: 'Usuário não encontrado ou sem senha.' });
    }

    const isValid = await bcrypt.compare(password, user.password);
    return isValid ? done(null, user) : done(null, false, { message: 'Senha incorreta.' });
  } catch (err) {
    return done(err);
  }
}));

// Estratégia de autenticação via GitHub OAuth2
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "/auth/github/callback",
  scope: ['user:email']
}, async (accessToken, refreshToken, profile, done) => {
  try {
    // Garante que o e-mail é capturado mesmo que esteja privado no GitHub
    let email = null;
    if (profile.emails && profile.emails.length > 0) {
      email = profile.emails[0].value;
    }

    const [user] = await User.findOrCreate({
      where: { githubId: profile.id },
      defaults: {
        displayName: profile.displayName || profile.username,
        email: email,
        photo: profile.photos?.[0]?.value || null
      }
    });

    return done(null, user);
  } catch (err) {
    return done(err, null);
  }
}));

// Serialização de sessão (para req.login, req.user, etc.)
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Desserialização do usuário a partir do ID da sessão
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

module.exports = passport;
