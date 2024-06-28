module.exports = (sequelize, DataTypes) => {
    const Catalogo = sequelize.define('catalogo', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        clave: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        unidad: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        costo_unitario: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        frente_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'frente',
                key: 'id',
            },
        },
    }, {
        tableName: 'catalogo',
        timestamps: false,
    });

    Catalogo.associate = (models) => {
        Catalogo.belongsTo(models.Frente, {
            foreignKey: 'frente_id',
            as: 'frente',
        });
    };

    return Catalogo;
};
