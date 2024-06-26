const empresaService = require('../services/empresaService');

class EmpresaController {
    async getAll(req, res) {
        try {
            const empresas = await empresaService.getAll();
            res.json(empresas);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getById(req, res) {
        try {
            const empresa = await empresaService.getById(req.params.id);
            if (empresa) {
                res.json(empresa);
            } else {
                res.status(404).json({ error: 'Empresa not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async create(req, res) {
        try {
            await empresaService.create(req.body);
            res.status(201).json({ message: 'Empresa created successfully' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            await empresaService.update(req.params.id, req.body);
            res.json({ message: 'Empresa updated successfully' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            await empresaService.delete(req.params.id);
            res.json({ message: 'Empresa deleted successfully' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new EmpresaController();
