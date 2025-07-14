const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Cliente = require('./cliente.model');
const DetalleVenta = require('./detalle_venta.model');
const Producto = require('./producto.model');

const Venta = sequelize.define('Venta', {
  fecha: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  tableName: 'ventas',
  timestamps: false
});

// Relaciones declaradas aquí (¡NO en detalle_venta!)
Venta.belongsTo(Cliente, { foreignKey: 'id_cliente' });
Venta.hasMany(DetalleVenta, { foreignKey: 'id_venta' });

DetalleVenta.belongsTo(Venta, { foreignKey: 'id_venta' });
DetalleVenta.belongsTo(Producto, { foreignKey: 'id_producto' });

module.exports = Venta;
