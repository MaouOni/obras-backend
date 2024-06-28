require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
    process.env.PG_DATABASE,
    process.env.PG_USER,
    process.env.PG_PASSWORD,
    {
        host: process.env.PG_HOST,
        port: parseInt(process.env.PG_PORT, 10),
        dialect: 'postgres',
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Empresa = require('./empresa.model')(sequelize, DataTypes);
db.Proyecto = require('./proyecto.model')(sequelize, DataTypes);
db.Frente = require('./frente.model')(sequelize, DataTypes);
db.Catalogo = require('./catalogo.model')(sequelize, DataTypes);
db.Estimacion = require('./estimacion.model')(sequelize, DataTypes);

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

module.exports = db;
