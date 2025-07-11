const Producto = require('../models/producto.model');
const Categoria = require('../models/categoria.model'); // asegúrate de importar

// GET
exports.obtenerTodos = async (req, res) => {
  try {
    const productos = await Producto.findAll({
      include: {
        model: Categoria,
        as: 'categoria',
        attributes: ['id', 'nombre'] // puedes agregar más si lo necesitas
      }
    });
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

// POST
exports.crear = async (req, res) => {
  try {
    const producto = await Producto.create(req.body);
    res.status(201).json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear producto' });
  }
};

// PUT
exports.actualizar = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);
    console.log(id)

    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    await producto.update(req.body);
    res.json({ mensaje: 'Producto actualizado correctamente', producto });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
};

// DELETE
exports.eliminar = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);

    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    await producto.destroy();
    res.json({ mensaje: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
};

