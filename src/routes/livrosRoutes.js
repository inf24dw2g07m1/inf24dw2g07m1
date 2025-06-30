const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livrosControllers');

//  Sem autenticação
router.get('/', livroController.getAllLivros);
router.get('/:id', livroController.getLivroById);
router.post('/', livroController.createLivro);
router.put('/:id', livroController.updateLivro);
router.delete('/:id', livroController.deleteLivro);

module.exports = router;



