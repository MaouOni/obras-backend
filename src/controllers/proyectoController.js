const db = require('../models');

exports.getProyectos = async (req, res) => {
    try {
        const proyectos = await db.Proyecto.findAll();
        res.status(200).json(proyectos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createProyecto = async (req, res) => {
    try {
        const { nombre, descripcion, fecha_inicio, fecha_final } = req.body;
        const proyecto = await db.Proyecto.create({ nombre, descripcion, fecha_inicio, fecha_final });
        res.status(201).json(proyecto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
