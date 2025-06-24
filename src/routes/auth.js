const express = require("express");
const passport = require("passport");
const router = express.Router();

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/login");
}

// GitHub OAuth2
router.get("/github", passport.authenticate("github", {
  scope: ["user:email"]
}));

router.get("/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/auth/login"
  }),
  (req, res) => {
    res.redirect("/api/docs");
  }
);

// Login local (formulário POST)
router.post("/login",
  passport.authenticate("local", {
    failureRedirect: "/auth/login?erro=1",
    successRedirect: "/api/docs"
  })
);

// Logout
router.get("/logout", (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    res.redirect("/auth/login?logout=1");
  });
});

// Página de login
router.get("/login", (req, res) => {
  const mensagem = req.query.logout === '1'
    ? '<p style="color:green;">Você saiu com sucesso.</p>'
    : req.query.erro === '1'
      ? '<p style="color:red;">Email ou senha inválidos.</p>'
      : '';
  res.send(`
    <h2>Login</h2>
    ${mensagem}
    <form method="POST" action="/auth/login">
      <input type="email" name="email" placeholder="Email" required /><br/>
      <input type="password" name="password" placeholder="Senha" required /><br/>
      <button type="submit">Entrar</button>
    </form>
    <hr/>
    <a href="/auth/github">Entrar com GitHub</a>
  `);
});

module.exports = { router, isLoggedIn };
