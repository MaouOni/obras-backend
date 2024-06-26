const { Proyecto } = require('../models');

exports.getAllProyectos = async () => {
    return await Proyecto.findAll();
};

exports.getProyectoById = async (id) => {
    return await Proyecto.findByPk(id);
};

exports.createProyecto = async (proyectoData) => {
    return await Proyecto.create(proyectoData);
};

exports.updateProyecto = async (id, proyectoData) => {
    const [updated] = await Proyecto.update(proyectoData, {
        where: { id }
    });
    if (updated) {
        return await Proyecto.findByPk(id);
    }
    return null;
};

exports.deleteProyecto = async (id) => {
    return await Proyecto.destroy({
        where: { id }
    });
};
