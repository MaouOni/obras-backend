const { Estimacion } = require('../models');

exports.getAllEstimaciones = async () => {
    return await Estimacion.findAll();
};

exports.getEstimacionById = async (id) => {
    return await Estimacion.findByPk(id);
};

exports.createEstimacion = async (estimacionData) => {
    return await Estimacion.create(estimacionData);
};

exports.updateEstimacion = async (id, estimacionData) => {
    const [updated] = await Estimacion.update(estimacionData, {
        where: { id }
    });
    if (updated) {
        return await Estimacion.findByPk(id);
    }
    return null;
};

exports.deleteEstimacion = async (id) => {
    return await Estimacion.destroy({
        where: { id }
    });
};
