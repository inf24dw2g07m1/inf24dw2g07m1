const express = require('express');
const router = express.Router();
const autorController = require('../controllers/autoresControllers');
const oauth = require('../auth/oauthServer');
const authenticateRequest = oauth.authenticate();

// Proteger todas as rotas com OAuth
router.get('/', authenticateRequest, autorController.getAllAutores);
router.get('/:id', authenticateRequest, autorController.getAutorById);
router.post('/', authenticateRequest, autorController.createAutor);
router.put('/:id', authenticateRequest, autorController.updateAutor);
router.delete('/:id', authenticateRequest, autorController.deleteAutor);

module.exports = router;
