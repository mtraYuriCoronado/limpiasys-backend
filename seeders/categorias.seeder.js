const sequelize = require('../config/db');
const Categoria = require('../models/categoria.model');

async function seedCategorias() {
  try {
    await sequelize.sync(); // Sincroniza sin eliminar datos

    const categorias = await Categoria.bulkCreate([
      {
        nombre: 'Desinfectantes',
        descripcion: 'Eliminan bacterias, virus y hongos'
      },
      {
        nombre: 'Limpiadores',
        descripcion: 'Productos para limpieza general de superficies'
      },
      {
        nombre: 'Detergentes',
        descripcion: 'Jabones líquidos y en polvo para ropa y trastes'
      },
      {
        nombre: 'Ambientadores',
        descripcion: 'Aromatizantes para espacios cerrados'
      }
    ]);

    console.log(`✅ ${categorias.length} categorías insertadas correctamente`);
    process.exit();
  } catch (error) {
    console.error('❌ Error al insertar categorías:', error);
    process.exit(1);
  }
}

seedCategorias();
