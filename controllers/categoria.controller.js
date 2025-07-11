const Categoria = require('../models/categoria.model');

// GET
exports.obtenerTodas = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener categorías' });
  }
};

// POST
exports.crear = async (req, res) => {
  try {
    const categoria = await Categoria.create(req.body);
    res.status(201).json(categoria);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear categoría' });
  }
};

// PUT
exports.actualizar = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await Categoria.findByPk(id);
    if (!categoria) return res.status(404).json({ error: 'No encontrada' });

    await categoria.update(req.body);
    res.json({ mensaje: 'Actualizada correctamente', categoria });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar' });
  }
};

// DELETE
exports.eliminar = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await Categoria.findByPk(id);
    if (!categoria) return res.status(404).json({ error: 'No encontrada' });

    await categoria.destroy();
    res.json({ mensaje: 'Eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar' });
  }
};