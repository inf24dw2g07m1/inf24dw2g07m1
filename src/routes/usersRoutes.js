const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersControllers');

// Criar um novo usuário
router.post('/users', userController.createUser);

// Buscar todos os usuários
router.get('/users', userController.getAllUsers);

module.exports = router;
