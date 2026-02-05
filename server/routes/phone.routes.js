const express = require('express');
const router = express.Router();
const phoneController = require('../controllers/phoneController');

// Definir que en el GET de esta ruta se ejecute getPhones
router.get('/', phoneController.getPhones);

module.exports = router;