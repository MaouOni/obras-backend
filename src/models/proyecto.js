module.exports = (sequelize, DataTypes) => {
    const Proyecto = sequelize.define('Proyecto', {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING,
        },
        fecha_inicio: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        fecha_final: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    });

    return Proyecto;
};
