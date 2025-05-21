const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("./auth");

router.get("/protected", isLoggedIn, (req, res) => {
  res.send("Você está autenticado e acessou uma rota protegida!");
});

module.exports = router; // exporta apenas o router (função middleware)

