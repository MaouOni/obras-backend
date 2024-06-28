const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.PG_DATABASE,
    process.env.PG_USER,
    process.env.PG_PASSWORD,
    {
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true, // This will use SSL
                rejectUnauthorized: false // This avoids an error with self-signed certificates
            }
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Define your models here
// db.Empresa = require('./empresa.model')(sequelize, DataTypes);
// db.Proyecto = require('./proyecto.model')(sequelize, DataTypes);
// db.Frente = require('./frente.model')(sequelize, DataTypes);
// db.Catalogo = require('./catalogo.model')(sequelize, DataTypes);
// db.Estimacion = require('./estimacion.model')(sequelize, DataTypes);

// Uncomment and define your associations if needed
// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

module.exports = db;
