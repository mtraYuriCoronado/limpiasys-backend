const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Categoria = sequelize.define('Categoria', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  descripcion: {
    type: DataTypes.TEXT
  }
}, {
  tableName: 'categorias',
  timestamps: true
});

module.exports = Categoria;

const Producto = require('./producto.model');

Categoria.hasMany(Producto, {
  foreignKey: 'id_categoria',
  as: 'productos'
});
