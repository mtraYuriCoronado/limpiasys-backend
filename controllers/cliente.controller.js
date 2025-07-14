const Cliente = require('../models/cliente.model');

exports.obtenerTodos = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los clientes' });
  }
};

exports.crear = async (req, res) => {
  try {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el cliente' });
  }
};

exports.actualizar = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findByPk(id);
    if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' });

    await cliente.update(req.body);
    res.json({ mensaje: 'Cliente actualizado correctamente', cliente });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el cliente' });
  }
};

exports.eliminar = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findByPk(id);
    if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' });

    await cliente.destroy();
    res.json({ mensaje: 'Cliente eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el cliente' });
  }
};
