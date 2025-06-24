require('dotenv').config();
const PORT = process.env.PORT || 3000;


const express = require("express");
const session = require("express-session");
const passport = require("passport"); 
require("./src/config/passport");     

const path = require("path");
const sequelize = require("./src/config/database");
const { isLoggedIn } = require("./src/routes/auth");

// Rotas
const { router: authRoutes } = require("./src/routes/auth");
const protectedRoutes = require("./src/routes/protected");
const appRoutes = require("./app"); // router com /api/* e /api/docs

const server = express();

// Sessão e autenticação
server.use(session({
  secret: process.env.SESSION_SECRET || "topsecret",
  resave: false,
  saveUninitialized: false
}));
server.use(passport.initialize());
server.use(passport.session());

// JSON body parsing
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Arquivos estáticos (HTML de login e protegida)
server.use(express.static(path.join(__dirname, "public")));

// Logout direto (fora do /auth)
server.get('/logout', isLoggedIn, (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    res.redirect('/auth/login?logout=1');
  });
});

// Rotas de autenticação
server.use('/auth', authRoutes);

// Rota protegida personalizada
server.use(protectedRoutes);

// Rotas REST da API + Swagger (/api/users, /api/docs etc.)
server.use('/api', appRoutes);

// Página inicial
server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "protected.html"));
});

// Página de login local
server.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

// Iniciar servidor
async function connectWithRetry(retries = 5, delay = 5000) {
  while (retries) {
    try {
      await sequelize.authenticate();
      console.log('Banco de dados conectado com sucesso');
      break;
    } catch (err) {
      console.error(`Erro ao conectar com o banco: ${err.message}`);
      retries--;
      console.log(`Tentando novamente em ${delay / 1000} segundos... (${retries} restantes)`);
      await new Promise(res => setTimeout(res, delay));
    }
  }

  if (!retries) {
    console.error('Falha ao conectar ao banco após várias tentativas.');
    process.exit(1);
  }
}

server.listen(PORT, async () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  await connectWithRetry();
});


