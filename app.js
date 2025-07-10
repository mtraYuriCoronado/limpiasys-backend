const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const productoRoutes = require('./routes/producto.routes');

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/productos', productoRoutes);

// Sincronizar base de datos
sequelize.sync()
  .then(() => console.log('Base de datos conectada y tablas sincronizadas'))
  .catch(err => console.error('Error en la conexión:', err));

// Levantar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
