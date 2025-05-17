const express = require('express'); 
const router = express.Router();
const userController = require('../controllers/usersControllers');
const oauth = require('../auth/oauthServer');
const authenticate = oauth.authenticate();

// Rota pública para criar novo user (sem token)
router.post('/', userController.createUser);

// Rotas protegidas com token
router.get('/', authenticate, userController.getAllUsers);
router.get('/:id', authenticate, userController.getUserById);
router.put('/:id', authenticate, userController.updateUser);
router.delete('/:id', authenticate, userController.deleteUser);

module.exports = router;



