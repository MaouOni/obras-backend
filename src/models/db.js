const { sequelize, DataTypes } = require('../config/sequelize');

const db = {};

db.Sequelize = sequelize.constructor;
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
