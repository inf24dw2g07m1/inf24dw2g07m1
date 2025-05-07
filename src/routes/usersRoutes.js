const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersControllers');


router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);

module.exports = router;
