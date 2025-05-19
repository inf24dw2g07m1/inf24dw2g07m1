const express = require("express");
const router = express.Router();

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
}

router.get("/protected", isLoggedIn, (req, res) => {
  res.json({
    message: "Rota protegida acessada com sucesso!",
    user: req.user
  });
});

module.exports = router;
