require('dotenv').config();
const express = require("express");
const session = require("express-session");
const passport = require("./src/config/passport");
const path = require("path");
const sequelize = require("./src/config/database");
const { isLoggedIn } = require("./src/routes/auth");

// Corrigido: desestruturando router de auth.js
const { router: authRoutes } = require("./src/routes/auth");

// protected.js já exporta apenas router 
const protectedRoutes = require("./src/routes/protected");

// app.js agora exporta apenas um Router
const appRoutes = require("./app"); 

const server = express();

// Sessão e autenticação
server.use(session({
  secret: process.env.SESSION_SECRET || "topsecret",
  resave: false,
  saveUninitialized: true
}));
server.use(passport.initialize());
server.use(passport.session());

// JSON body parsing
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Arquivos estáticos (HTML de login e protected)
server.use(express.static(path.join(__dirname, "public")));

//logout
server.get('/logout', isLoggedIn, (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    res.redirect('/auth/login');
  });
});


// Rotas de autenticação
server.use('/auth', authRoutes);

// Rota protegida com isLoggedIn
server.use(protectedRoutes);

// Rotas da API REST + Swagger
server.use('/api', appRoutes);

// Página inicial e login
server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "protected.html"));
});

server.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});


// Iniciar servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, async () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  try {
    await sequelize.authenticate();
    console.log("Banco de dados conectado com sucesso");
  } catch (error) {
    console.error("Erro ao conectar com o banco:", error);
  }
});
