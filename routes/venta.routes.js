const express = require('express');
const router = express.Router();
const ventaCtrl = require('../controllers/venta.controller');

router.post('/', ventaCtrl.crearVenta);
router.get('/', ventaCtrl.obtenerVentas);
router.get('/:id', ventaCtrl.obtenerVentaPorId);
router.delete('/:id', ventaCtrl.eliminarVenta);

module.exports = router;
