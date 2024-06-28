const Frente = require('../models/frente.model');
const Catalogo = require('../models/catalogo.model');
const Proyecto = require('../models/proyecto.model');
const Empresa = require('../models/empresa.model');

exports.getAllFrentes = async (req, res) => {
    try {
        const frentes = await Frente.findAll();
        res.json(frentes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getFrenteById = async (req, res) => {
    try {
        const frente = await Frente.findByPk(req.params.id, {
            include: [
                { model: Catalogo, as: 'catalogos_relacionados' },
                { model: Proyecto, as: 'proyecto' },
                { model: Empresa, as: 'empresa' }
            ]
        });
        if (frente) {
            res.json(frente);
        } else {
            res.status(404).json({ error: 'Frente not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createFrente = async (req, res) => {
    try {
        const newFrente = await Frente.create(req.body);
        res.status(201).json(newFrente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateFrente = async (req, res) => {
    try {
        const [updated] = await Frente.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedFrente = await Frente.findByPk(req.params.id);
            res.json(updatedFrente);
        } else {
            res.status(404).json({ error: 'Frente not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteFrente = async (req, res) => {
    try {
        const deleted = await Frente.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Frente not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
