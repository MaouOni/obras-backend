const { Proyecto, Frente } = require('../models/db');

exports.getAllProyectos = async () => {
    return await Proyecto.findAll();
};

exports.getProyectoById = async (id) => {
    return await Proyecto.findByPk(id, {
        include: [{
            model: Frente,
            as: 'frentes'
        }]
    });
};

exports.createProyecto = async (proyectoData) => {
    return await Proyecto.create(proyectoData);
};

exports.updateProyecto = async (id, proyectoData) => {
    const [updated] = await Proyecto.update(proyectoData, {
        where: { id }
    });
    if (updated) {
        return await Proyecto.findByPk(id, {
            include: [{
                model: Frente,
                as: 'frentes'
            }]
        });
    }
    return null;
};

exports.deleteProyecto = async (id) => {
    return await Proyecto.destroy({
        where: { id }
    });
};
