const proyectoService = require('../services/proyectoService');

exports.getAllProyectos = async (req, res) => {
    try {
        const proyectos = await proyectoService.getAllProyectos();
        res.json(proyectos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProyectoById = async (req, res) => {
    try {
        const proyecto = await proyectoService.getProyectoById(req.params.id);
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
        const newProyecto = await proyectoService.createProyecto(req.body);
        res.status(201).json(newProyecto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateProyecto = async (req, res) => {
    try {
        const updatedProyecto = await proyectoService.updateProyecto(req.params.id, req.body);
        if (updatedProyecto) {
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
        const deleted = await proyectoService.deleteProyecto(req.params.id);
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Proyecto not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
