const Estimacion = require('../models/estimacion.model');
const Frente = require('../models/frente.model');
const Empresa = require('../models/empresa.model');
const Catalogo = require('../models/catalogo.model');

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
        const estimacion = await Estimacion.findByPk(req.params.id, {
            include: [
                { model: Frente, as: 'frente', include: [{ model: Empresa, as: 'empresa' }] }
            ]
        });
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

exports.calculateEstimacion = async (req, res) => {
    try {
        const frenteId = req.params.frenteId;
        const catalogos = await Catalogo.findAll({ where: { frente_id: frenteId } });

        let importeEstimadoActual = 0;
        catalogos.forEach(catalogo => {
            importeEstimadoActual += catalogo.costo_unitario * catalogo.cantidad;
        });

        const estimaciones = await Estimacion.findAll({ where: { frente_id: frenteId } });

        const importeEstimadoAcumAnterior = estimaciones.length > 0 ? estimaciones[estimaciones.length - 1].importe_estimado_acum_actual : 0;

        const frente = await Frente.findByPk(frenteId);

        res.json({
            importe_estimado_actual: importeEstimadoActual,
            importe_estimado_acum_anterior: importeEstimadoAcumAnterior,
            importe_estimado_acum_actual: importeEstimadoAcumAnterior + importeEstimadoActual,
            saldo_por_estimar: frente.importe_contrato - (importeEstimadoAcumAnterior + importeEstimadoActual)
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
