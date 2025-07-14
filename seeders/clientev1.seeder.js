
const sequelize = require('../config/db');
const Cliente = require('../models/cliente.model');

async function seedClientes() {
  try {
    await sequelize.sync({ force: false }); // no borra la tabla

    const clientes = await Cliente.bulkCreate([
    { 'nombre': 'Alejandro Azuara Flores', 'direccion': 'Blvd Lázaro Cárdenas 512 Col. Loma Bonita', 'ciudad': 'Cd.Valles San Luis Potosi', 'codigo_postal': '79020', 'rfc': 'AUFA870208QP6', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'Carlos Ignacio Cavazos Guerra', 'direccion': 'Lluvia Ote 856 Col. Dos Mil ', 'ciudad': 'Cd.Victoria, Tamaulipas', 'codigo_postal': '87099', 'rfc': 'CAGC780107853', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'Copizza', 'direccion': 'Calzada Gral Luis Caballero 500 Col. 7 de Noviembre', 'ciudad': 'Cd.Victoria, Tamaulipas', 'codigo_postal': '88730', 'rfc': 'COP060201DL4', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'Felipe Juan Salinas Mansur', 'direccion': 'San Jorge 5571 Col. Camino Real', 'ciudad': 'Cd.Victoria, Tamaulipas', 'codigo_postal': '87028', 'rfc': 'SAMF840611F14', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'Funerales a Futuro Jardines del Recuerdo', 'direccion': 'Boulevard Jose Lopez Portillo 702 Col. Mainero', 'ciudad': 'Cd.Victoria, Tamaulipas', 'codigo_postal': '87100', 'rfc': 'FFJ940117548', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'Gigitam', 'direccion': 'Cristóbal Colón 1220 Col. Quinta Laura', 'ciudad': 'Cd.Victoria, Tamaulipas', 'codigo_postal': '87050', 'rfc': 'GIG110803BF6', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'Grupo Tamaulipeco Robsa', 'direccion': 'Emiliano P.Nafarrete 138  Col. Centro', 'ciudad': 'Cd.Victoria, Tamaulipas', 'codigo_postal': '87000', 'rfc': 'GTR1606132GA', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'Educación Infantil de Calidad de Tamaulipas', 'direccion': 'Calle 20 de Noviembre 413 Col. Centro', 'ciudad': 'Cd.Victoria, Tamaulipas', 'codigo_postal': '87000', 'rfc': 'EIC130423BY6', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'GuGu Floran', 'direccion': 'Cristóbal Colón 2425 Col. Quinta Laura', 'ciudad': 'Cd.Victoria, Tamaulipas', 'codigo_postal': '87050', 'rfc': 'GFL110404510', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'Instituto de Ciencias y Estudios Superiores de Tamaulipas', 'direccion': 'Avenida Diagonal Norte Sur 112 Col. Tampico', 'ciudad': 'Tampico, Tamaulipas', 'codigo_postal': '89137', 'rfc': 'ICE790416E19', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'José Guillermo Quintero Salazar', 'direccion': 'Carrera Torres 1389 Col. Centro', 'ciudad': 'Cd.Victoria, Tamaulipas', 'codigo_postal': '87000', 'rfc': 'QUSG730426QN0', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'Manuel Ramírez Martínez', 'direccion': 'Avenida Las Torres Local B Col. México', 'ciudad': 'Cd.Victoria, Tamaulipas', 'codigo_postal': '87049', 'rfc': 'RAMM850929KM3', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'Margarita Plascencia Álvarez', 'direccion': 'Baja California 450 Col. San José', 'ciudad': 'Cd.Victoria, Tamaulipas', 'codigo_postal': '87040', 'rfc': 'PAAM941221DW6', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'Moises Hernández Quiñones', 'direccion': 'Pedro Jose Mendez 401 Col. Juventud Revolucionaria', 'ciudad': 'Soto La Marina, Tamaulipas', 'codigo_postal': '87670', 'rfc': 'HEQM9401094B5', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'Muebleria Villarreal Caballero', 'direccion': 'Hidaldo Ote 301 Col. Centro', 'ciudad': 'Cd.Victoria, Tamaulipas', 'codigo_postal': '87000', 'rfc': 'MVC840208V96', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'Multimateriales y Servicios', 'direccion': 'Blvd López Mateos 2339 Col. Adolfo López Mateos', 'ciudad': 'Cd.Victoria, Tamaulipas', 'codigo_postal': '87020', 'rfc': 'MSE1301113R3', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'Oralia Gallardo Ruíz', 'direccion': 'Miguel de la Madrid Hurtado 511 Col. Luis Donaldo Colosio', 'ciudad': 'Reynosa, Tamaulipas', 'codigo_postal': '88793', 'rfc': 'GARO671103LU9', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'Pablo Saul Cavazos Vega', 'direccion': 'Blvd Fidel Velazquez 1310 Col. Residencial las Palmas', 'ciudad': 'Cd.Victoria, Tamaulipas', 'codigo_postal': '87050', 'rfc': 'CAVP750705UT4', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'Pollo Bravo', 'direccion': 'Carretera Libre Monterrey a Reynosa 210 Col. Portal de San Miguel', 'ciudad': 'Reynosa, Tamaulipas', 'codigo_postal': '88730', 'rfc': 'PBR130422TT0', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'Proveedora y Servicios Integrales del valle', 'direccion': 'Mar Adriático 3404 Col. Haciendas del Bosque', 'ciudad': 'Cd.Victoria, Tamaulipas', 'codigo_postal': '87049', 'rfc': 'PSI100626LQ8', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'QS del Bajío', 'direccion': 'Emiliano P.Nafarrete 138 "C" Col. Centro', 'ciudad': 'Cd.Victoria, Tamaulipas', 'codigo_postal': '87000', 'rfc': 'QBA200120G2A', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'Rusal', 'direccion': 'Carrera Torres 1309 Col. Comercial 2000', 'ciudad': 'Cd.Victoria, Tamaulipas', 'codigo_postal': '87099', 'rfc': 'RUS910704ID8', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'TH Tam', 'direccion': 'Cristóbal Colón 1220 Col. Quinta Laura', 'ciudad': 'Cd.Victoria, Tamaulipas', 'codigo_postal': '87050', 'rfc': 'TTA130212HA8', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'Luis Adrian Araguz Charles', 'direccion': 'Leopoldo Bello 313 Col. America de Juarez ', 'ciudad': 'Cd.Victoria, Tamaulipas', 'codigo_postal': '87078', 'rfc': 'AACL870518AY4', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'Grupo Las Alitas Victoria', 'direccion': 'Boulevard Tamaulipas 2541 Col Residencial Cabañas de Victoria ', 'ciudad': 'Cd.Victoria, Tamaulipas', 'codigo_postal': '87025', 'rfc': 'GLA21041268A', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'Sergio Javier Martínez Torres', 'direccion': 'Veracruz 1534 Col San Francisco ', 'ciudad': 'Cd.Victoria, Tamaulipas', 'codigo_postal': '87050', 'rfc': 'MATS760711QZ1', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'Helados Mafis', 'direccion': 'Av Hidalgo 1 5100 Col Loma de Rosales ', 'ciudad': 'Tampico, Tamaulipas', 'codigo_postal': '89100', 'rfc': 'HMA041124FS9', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'Amy Servicios y Productos de Victoria', 'direccion': 'Fco I Madero 1530 Col Del Periodista ', 'ciudad': 'Cd.Victoria, Tamaulipas', 'codigo_postal': '87040', 'rfc': 'ASY061127U95', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'Vitasport GYM', 'direccion': 'Baja California 450 Col. San José', 'ciudad': 'Cd.Victoria, Tamaulipas', 'codigo_postal': '87040', 'rfc': 'VGY1402254S7', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'Promotora de Inmuebles Magosa', 'direccion': 'Manuel Gonzalez Jr 231 Col Centro', 'ciudad': 'Cd.Victoria, Tamaulipas', 'codigo_postal': '87000', 'rfc': 'PIM040404IS2', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'Oscar Felipe Loera Treviño ', 'direccion': 'Fermin Legorreta 1647 B Col Del Periodista', 'ciudad': 'Cd.Victoria, Tamaulipas', 'codigo_postal': '87040', 'rfc': 'LOTO800823G50', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'Pasteleria Torres de Tamaulipas ', 'direccion': 'Coahuila 996 Col San Jose ', 'ciudad': 'Cd.Victoria, Tamaulipas', 'codigo_postal': '87040', 'rfc': 'PTT231130P96', 'contacto': null, 'tipo_cliente': 'Particular'
    },
    { 'nombre': 'Agroservicios Integrados Mega', 'direccion': 'Jose Ma Vargas 458 Col La Presita', 'ciudad': 'Cd.Victoria, Tamaulipas', 'codigo_postal': '87019', 'rfc': 'AIM030414B52', 'contacto': null, 'tipo_cliente': 'Particular'
    }
]);

    console.log(`✅ Se insertaron ${clientes.length} clientes`);
    process.exit();
  } catch (error) {
    console.error('❌ Error al insertar clientes:', error);
    process.exit(1);
  }
}

seedClientes();
