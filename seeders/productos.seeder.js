const sequelize = require('../config/db');
const Producto = require('../models/producto.model');

async function seed() {
  try {
    await sequelize.sync({ force: true }); // Elimina y recrea las tablas

    await Producto.bulkCreate([
      {
        nombre: 'Cloro multiusos',
        descripcion: 'Cloro líquido para limpieza general.',
        precio: 35.50,
        stock: 120,
        unidad_medida: 'litro',
        id_categoria: 1
      },
      {
        nombre: 'Jabón en polvo',
        descripcion: 'Jabón en polvo para ropa de color.',
        precio: 48.00,
        stock: 80,
        unidad_medida: 'kilo',
        id_categoria: 2
      },
      {
        nombre: 'Desengrasante industrial',
        descripcion: 'Especial para cocinas y talleres mecánicos.',
        precio: 75.00,
        stock: 50,
        unidad_medida: 'litro',
        id_categoria: 3
      }
    ]);

    console.log('✅ Datos de prueba insertados correctamente');
    process.exit();
  } catch (error) {
    console.error('❌ Error al insertar datos de prueba:', error);
    process.exit(1);
  }
}

seed();
