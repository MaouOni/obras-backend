// src/models/frente.model.js

module.exports = (sequelize, DataTypes) => {
    const Frente = sequelize.define('Frente', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        fecha_inicio: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        fecha_final: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        no_contrato: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        proyecto_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'proyecto', // Adjust to match your PostgreSQL table name
                key: 'id',
            },
        },
        empresa_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'empresa', // Adjust to match your PostgreSQL table name
                key: 'id',
            },
        },
        importe: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0,
        },
    }, {
        tableName: 'frente',
        timestamps: false,
    });

    Frente.associate = (models) => {
        Frente.belongsTo(models.Proyecto, {
            foreignKey: 'proyecto_id',
            as: 'proyecto',
        });
        Frente.belongsTo(models.Empresa, {
            foreignKey: 'empresa_id',
            as: 'empresa',
        });
        Frente.hasMany(models.Catalogo, {
            foreignKey: 'frente_id',
            as: 'catalogos_relacionados',
        });
    };

    return Frente;
};
