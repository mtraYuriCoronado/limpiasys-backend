const sequelize = require('../config/db');
const Venta = require('../models/venta.model');
const DetalleVenta = require('../models/detalle_venta.model');
const Cliente = require('../models/cliente.model');
const Producto = require('../models/producto.model');

// POST: Crear venta
exports.crearVenta = async (req, res) => {
  const { id_cliente, productos } = req.body;

  if (!id_cliente || !Array.isArray(productos) || productos.length === 0) {
    return res.status(400).json({ error: "Datos incompletos para registrar la venta." });
  }

  const t = await sequelize.transaction();

  try {
    const cliente = await Cliente.findByPk(id_cliente);
    if (!cliente) throw new Error("Cliente no encontrado");

    let total = 0;
    const detalles = [];

    for (const item of productos) {
      const producto = await Producto.findByPk(item.id_producto);
      if (!producto) throw new Error(`Producto con ID ${item.id_producto} no existe`);

      if (producto.stock < item.cantidad) {
        throw new Error(`Stock insuficiente para el producto: ${producto.nombre}`);
      }

      const subtotal = item.cantidad * parseFloat(producto.precio);
      total += subtotal;

      detalles.push({
        id_producto: producto.id,
        cantidad: item.cantidad,
        precio_unitario: producto.precio,
        subtotal
      });

      producto.stock -= item.cantidad;
      await producto.save({ transaction: t });
    }

    const venta = await Venta.create({ id_cliente, total }, { transaction: t });

    for (const detalle of detalles) {
      detalle.id_venta = venta.id;
    }

    await DetalleVenta.bulkCreate(detalles, { transaction: t });

    await t.commit();
    res.status(201).json({ mensaje: "Venta registrada con éxito", venta });
  } catch (error) {
    await t.rollback();
    res.status(500).json({ error: error.message });
  }
};

// GET: Todas las ventas
exports.obtenerVentas = async (req, res) => {
  try {
    const ventas = await Venta.findAll({
      include: [
        { model: Cliente, attributes: ['nombre', 'rfc'] }
      ]
    });
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las ventas" });
  }
};

// GET: Venta específica con detalle
exports.obtenerVentaPorId = async (req, res) => {
  try {
    const venta = await Venta.findByPk(req.params.id, {
      include: [
        { model: Cliente, attributes: ['nombre', 'rfc'] },
        {
          model: DetalleVenta,
          include: [{ model: Producto, attributes: ['nombre', 'precio'] }]
        }
      ]
    });

    if (!venta) return res.status(404).json({ error: "Venta no encontrada" });
    res.json(venta);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la venta" });
  }
};

// DELETE: Eliminar venta (y restaurar stock)
exports.eliminarVenta = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const venta = await Venta.findByPk(req.params.id);
    if (!venta) return res.status(404).json({ error: "Venta no encontrada" });

    const detalles = await DetalleVenta.findAll({ where: { id_venta: venta.id } });

    // Restaurar stock
    for (const det of detalles) {
      const producto = await Producto.findByPk(det.id_producto);
      if (producto) {
        producto.stock += det.cantidad;
        await producto.save({ transaction: t });
      }
    }

    await DetalleVenta.destroy({ where: { id_venta: venta.id }, transaction: t });
    await Venta.destroy({ where: { id: venta.id }, transaction: t });

    await t.commit();
    res.json({ mensaje: "Venta eliminada y stock restaurado" });
  } catch (error) {
    await t.rollback();
    res.status(500).json({ error: "Error al eliminar la venta" });
  }
};
