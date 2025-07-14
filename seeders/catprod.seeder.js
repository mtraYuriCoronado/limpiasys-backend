const Categoria = require('../models/categoria.model');
const Producto = require('../models/producto.model');

async function seedCategoriasYProductos() {
  // Categorías
  const categorias = await Categoria.bulkCreate([
    { nombre: 'Desinfectantes' },
    { nombre: 'Detergentes' },
    { nombre: 'Aromatizantes' }
  ]);

  // Productos (usando IDs de categorías insertadas)
  await Producto.bulkCreate([
    {
      nombre: 'Cloralex',
      descripcion: 'Desinfectante multiusos',
      precio: 25,
      stock: 100,
      unidad_medida: 'litro',
      id_categoria: categorias[0].id
    },
    {
      nombre: 'Fabuloso',
      descripcion: 'Limpiador aromático',
      precio: 30,
      stock: 80,
      unidad_medida: 'litro',
      id_categoria: categorias[2].id
    },
    {
      nombre: 'Ace',
      descripcion: 'Detergente en polvo',
      precio: 50,
      stock: 60,
      unidad_medida: 'kg',
      id_categoria: categorias[1].id
    }
  ]);

  console.log('✅ Categorías y productos insertados correctamente');
}

module.exports = seedCategoriasYProductos;
