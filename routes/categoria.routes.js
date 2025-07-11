const express = require('express');
const router = express.Router();
const categoriaCtrl = require('../controllers/categoria.controller');

router.get('/', categoriaCtrl.obtenerTodas);
router.post('/', categoriaCtrl.crear);
router.put('/:id', categoriaCtrl.actualizar);
router.delete('/:id', categoriaCtrl.eliminar);

module.exports = router;
