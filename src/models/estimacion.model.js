// src/models/estimacion.model.js

module.exports = (sequelize, DataTypes) => {
    const Estimacion = sequelize.define('estimacion', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        numero_estimacion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        importe_contrato: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        importe_estimado_acum_anterior: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        importe_estimado_actual: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        importe_estimado_acum_actual: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        saldo_por_estimar: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        numero_contrato: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        razon_social: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        periodo: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        frente_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'frente',  // Make sure the table name matches your PostgreSQL setup
                key: 'id',
            },
        },
    }, {
        tableName: 'estimacion',
        timestamps: false,
    });

    Estimacion.associate = (models) => {
        Estimacion.belongsTo(models.Frente, {
            foreignKey: 'frente_id',
            as: 'frente',
        });
    };

    return Estimacion;
};
