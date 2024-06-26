const { Estimacion } = require('../models');

exports.getAllEstimaciones = async (req, res) => {
    try {
        const estimaciones = await Estimacion.findAll();
        res.json(estimaciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getEstimacionById = async (req, res) => {
    try {
        const estimacion = await Estimacion.findByPk(req.params.id);
        if (estimacion) {
            res.json(estimacion);
        } else {
            res.status(404).json({ error: 'Estimacion not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createEstimacion = async (req, res) => {
    try {
        const newEstimacion = await Estimacion.create(req.body);
        res.status(201).json(newEstimacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateEstimacion = async (req, res) => {
    try {
        const [updated] = await Estimacion.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedEstimacion = await Estimacion.findByPk(req.params.id);
            res.json(updatedEstimacion);
        } else {
            res.status(404).json({ error: 'Estimacion not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteEstimacion = async (req, res) => {
    try {
        const deleted = await Estimacion.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Estimacion not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
