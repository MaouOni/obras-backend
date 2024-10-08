module.exports = (sequelize, DataTypes) => {
    return sequelize.define('empresa', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        razon_social: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rfc: {
            type: DataTypes.STRING(13),
            allowNull: false,
        },
        numero_iva: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        cmic: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
    }, {
        tableName: 'empresa',
        timestamps: false
    });
};
