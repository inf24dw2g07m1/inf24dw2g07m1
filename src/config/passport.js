const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/User');
require('dotenv').config();

// 🔐 Estratégia de login local
passport.use(new LocalStrategy({
  usernameField: 'email'
}, async (email, password, done) => {
  try {
    const user = await User.findOne({ where: { email } });
    if (!user || !user.password) return done(null, false, { message: 'Usuário não encontrado ou sem senha.' });

    const isValid = await bcrypt.compare(password, user.password);
    return isValid ? done(null, user) : done(null, false, { message: 'Senha incorreta.' });
  } catch (err) {
    return done(err);
  }
}));

// 🌐 Estratégia GitHub OAuth2
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "/auth/github/callback"
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const [user] = await User.findOrCreate({
      where: { githubId: profile.id },
      defaults: {
        displayName: profile.displayName || profile.username,
        email: profile.emails?.[0]?.value || null,
        photo: profile.photos?.[0]?.value || null
      }
    });
    return done(null, user);
  } catch (err) {
    return done(err, null);
  }
}));

// Sessão
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  const user = await User.findByPk(id);
  done(null, user);
});

