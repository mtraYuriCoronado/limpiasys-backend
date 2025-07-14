const express = require('express');
const router = express.Router();
const clienteCtrl = require('../controllers/cliente.controller');

router.get('/', clienteCtrl.obtenerTodos);
router.post('/', clienteCtrl.crear);
router.put('/:id', clienteCtrl.actualizar);
router.delete('/:id', clienteCtrl.eliminar);

module.exports = router;
