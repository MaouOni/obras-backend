const { Frente } = require('../models');

exports.getAllFrentes = async () => {
    return await Frente.findAll();
};

exports.getFrenteById = async (id) => {
    return await Frente.findByPk(id);
};

exports.createFrente = async (frenteData) => {
    return await Frente.create(frenteData);
};

exports.updateFrente = async (id, frenteData) => {
    const [updated] = await Frente.update(frenteData, {
        where: { id }
    });
    if (updated) {
        return await Frente.findByPk(id);
    }
    return null;
};

exports.deleteFrente = async (id) => {
    return await Frente.destroy({
        where: { id }
    });
};
