const { Proyecto } = require('../models');

exports.getAllProyectos = async (req, res) => {
    try {
        const proyectos = await Proyecto.findAll();
        res.json(proyectos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProyectoById = async (req, res) => {
    try {
        const proyecto = await Proyecto.findByPk(req.params.id);
        if (proyecto) {
            res.json(proyecto);
        } else {
            res.status(404).json({ error: 'Proyecto not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createProyecto = async (req, res) => {
    try {
        const newProyecto = await Proyecto.create(req.body);
        res.status(201).json(newProyecto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateProyecto = async (req, res) => {
    try {
        const [updated] = await Proyecto.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedProyecto = await Proyecto.findByPk(req.params.id);
            res.json(updatedProyecto);
        } else {
            res.status(404).json({ error: 'Proyecto not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteProyecto = async (req, res) => {
    try {
        const deleted = await Proyecto.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Proyecto not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
