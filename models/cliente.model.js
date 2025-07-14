const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Cliente = sequelize.define('Cliente', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  direccion: {
    type: DataTypes.STRING
  },
  ciudad: {
    type: DataTypes.STRING
  },
  codigo_postal: {
    type: DataTypes.STRING
  },
  rfc: {
    type: DataTypes.STRING
  },
  contacto: {
    type: DataTypes.STRING // Nombre de contacto, si aplica
  },
  tipo_cliente: {
    type: DataTypes.STRING,
    defaultValue: 'Particular'
  }
}, {
  tableName: 'clientes',
  timestamps: true
});

module.exports = Cliente;
