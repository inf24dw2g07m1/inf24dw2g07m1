const express = require("express");
const passport = require("passport");
const router = express.Router();

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/login");
}

router.get("/google", passport.authenticate("google", {
  scope: ["profile", "email"]
}));

router.get("/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/login"
  }),
  (req, res) => {
    res.redirect("/api/docs");
  }
);

router.get("/logout", (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    res.redirect("/auth/login");
  });
});

router.get("/login", (req, res) => {
  res.send(`<h2>Login com Google</h2><a href="/auth/google">Entrar com Google</a>`);
});

module.exports = { router, isLoggedIn };
