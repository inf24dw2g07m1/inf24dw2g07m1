const express = require('express'); 
const router = express.Router();
const userController = require('../controllers/usersControllers');

// Rota pública para criar novo user
router.post('/', userController.createUser);

// Rotas públicas (antes protegidas)
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;



