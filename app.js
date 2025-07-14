const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');

const productoRoutes = require('./routes/producto.routes');
const categoriaRoutes = require('./routes/categoria.routes');
const clienteRoutes = require('./routes/cliente.routes');
const ventaRoutes = require('./routes/venta.routes');

const app = express();
app.use(cors());
app.use(express.json());

// 📌 IMPORTAR MODELOS ANTES DEL SYNC
require('./models/cliente.model');
require('./models/producto.model');
require('./models/categoria.model');
require('./models/detalle_venta.model'); // primero el modelo base
require('./models/venta.model');         // luego el que contiene las relaciones

// Rutas
app.use('/api/productos', productoRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/ventas', ventaRoutes);

// Sincronizar base de datos
sequelize.sync(
  // { force: true } // ⚠️ Elimina todo y vuelve a crear tablas
  { alter: true }    // 🛠 Actualiza estructura sin borrar registros
)
  .then(() => console.log('Base de datos conectada y tablas sincronizadas'))
  .catch(err => console.error('Error en la conexión:', err));

// Levantar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
