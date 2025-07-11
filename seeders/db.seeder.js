const sequelize = require('../config/db');
const Categoria = require('../models/categoria.model');
const Producto = require('../models/producto.model');

async function seedTodo() {
  try {
    // Sincronizar modelos (esto no borra datos existentes)
    await sequelize.sync({ force: true }); // ⚠️ Elimina y vuelve a crear tablas

    console.log('🔄 Base de datos sincronizada');

    // Insertar categorías
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

    console.log(`✅ Se insertaron ${categorias.length} categorías`);

    // Insertar productos relacionados con las categorías
    const productos = await Producto.bulkCreate([
      {
        nombre: 'Cloralex',
        descripcion: 'Cloro desinfectante de uso doméstico',
        precio: 25,
        stock: 100,
        unidad_medida: 'litro',
        id_categoria: categorias[0].id // Desinfectantes
      },
      {
        nombre: 'Fabuloso Lavanda',
        descripcion: 'Limpiador multiusos con aroma lavanda',
        precio: 28.5,
        stock: 120,
        unidad_medida: 'litro',
        id_categoria: categorias[1].id // Limpiadores
      },
      {
        nombre: 'Ariel polvo',
        descripcion: 'Detergente en polvo para ropa blanca y de color',
        precio: 45,
        stock: 70,
        unidad_medida: 'kilo',
        id_categoria: categorias[2].id // Detergentes
      },
      {
        nombre: 'Glade aerosol',
        descripcion: 'Ambientador en aerosol para interiores',
        precio: 32,
        stock: 90,
        unidad_medida: 'pieza',
        id_categoria: categorias[3].id // Ambientadores
      }
    ]);

    console.log(`✅ Se insertaron ${productos.length} productos`);
    console.log('🚀 Seeder combinado ejecutado con éxito');
    process.exit();

  } catch (error) {
    console.error('❌ Error durante el seed:', error);
    process.exit(1);
  }
}

seedTodo();
