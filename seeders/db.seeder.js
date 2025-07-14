const sequelize = require('../config/db');
const seedCategoriasYProductos = require('./catprod.seeder');
const seedClientes = require('./cliente.seeder');

async function seedTodo() {
  try {
    await sequelize.sync({ force: true }); // cuidado: borra todo

    console.log('🧱 Tablas sincronizadas');

    await seedCategoriasYProductos(); // categorías y productos
    await seedClientes();            // clientes

    console.log('🚀 Todos los seeders ejecutados');
    process.exit();
  } catch (error) {
    console.error('❌ Error en el seeder:', error);
    process.exit(1);
  }
}

seedTodo();
