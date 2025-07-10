const express = require('express');
const router = express.Router();
const productoCtrl = require('../controllers/producto.controller');

router.get('/', productoCtrl.obtenerTodos);
router.post('/', productoCtrl.crear);

module.exports = router;
