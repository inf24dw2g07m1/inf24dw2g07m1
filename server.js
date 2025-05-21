require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("./src/config/passport");
const path = require("path");
const sequelize = require("./src/config/database");
const app = require("./app"); // As rotas da API REST

const authRoutes = require("./src/routes/auth");
const protectedRoutes = require("./src/routes/protected");

const server = express();

// Sessão e autenticação
server.use(session({
  secret: process.env.SESSION_SECRET || "topsecret",
  resave: false,
  saveUninitialized: true
}));
server.use(passport.initialize());
server.use(passport.session());

// JSON body parsing (útil caso utiliza bodyParser no app.js)
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Arquivos estáticos (HTML do login/protegido)
server.use(express.static(path.join(__dirname, "public")));

// Rotas de autenticação e proteção
server.use(authRoutes);
server.use(protectedRoutes);

// Rotas REST da API (usuarios, autores, livros)
server.use(app);

// HTML para login e área protegida
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

