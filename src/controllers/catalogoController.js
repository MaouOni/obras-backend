const catalogoService = require('../services/catalogoService');

class CatalogoController {
    async getAll(req, res) {
        try {
            const catalogos = await catalogoService.getAll();
            res.json(catalogos);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getById(req, res) {
        try {
            const catalogo = await catalogoService.getById(req.params.id);
            if (catalogo) {
                res.json(catalogo);
            } else {
                res.status(404).json({ error: 'Catalogo not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async create(req, res) {
        try {
            await catalogoService.create(req.body);
            res.status(201).json({ message: 'Catalogo created successfully' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            await catalogoService.update(req.params.id, req.body);
            res.json({ message: 'Catalogo updated successfully' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            await catalogoService.delete(req.params.id);
            res.json({ message: 'Catalogo deleted successfully' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getByFrenteId(req, res) {
        try {
            const catalogos = await catalogoService.getByFrenteId(req.params.frenteId);
            res.json(catalogos);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new CatalogoController();
