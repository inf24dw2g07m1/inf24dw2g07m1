const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livrosControllers');
const oauth = require('../auth/oauthServer');
const authenticateRequest = oauth.authenticate();

// Proteger todas as rotas com OAuth
router.get('/', authenticateRequest, livroController.getAllLivros);
router.get('/:id', authenticateRequest, livroController.getLivroById);
router.post('/', authenticateRequest, livroController.createLivro);
router.put('/:id', authenticateRequest, livroController.updateLivro);
router.delete('/:id', authenticateRequest, livroController.deleteLivro);

module.exports = router;
