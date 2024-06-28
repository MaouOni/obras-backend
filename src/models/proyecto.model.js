module.exports = (sequelize, DataTypes) => {
    const Proyecto = sequelize.define('proyecto', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        fecha_inicio: {
            type: DataTypes.DATE,
            allowNull: false
        },
        fecha_final: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'proyecto',
        timestamps: false
    });

    Proyecto.associate = (models) => {
        Proyecto.hasMany(models.Frente, {
            foreignKey: 'proyecto_id',
            as: 'frentes'
        });
    };

    return Proyecto;
};
