const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Producto = sequelize.define('Producto', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  unidad_medida: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id_categoria: {
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'productos',
  timestamps: true
});

module.exports = Producto;
