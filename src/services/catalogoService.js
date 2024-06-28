const { Catalogo, Frente } = require('../models/db');

class CatalogoService {
    async getAll() {
        return await Catalogo.findAll();
    }

    async getById(id) {
        return await Catalogo.findByPk(id);
    }

    async create(catalogo) {
        return await Catalogo.create(catalogo);
    }

    async update(id, catalogo) {
        const [updated] = await Catalogo.update(catalogo, {
            where: { id: id }
        });
        if (updated) {
            return await Catalogo.findByPk(id);
        }
        return null;
    }

    async delete(id) {
        const deleted = await Catalogo.destroy({
            where: { id: id }
        });
        return deleted;
    }

    async getFrente(frenteId) {
        return await Frente.findByPk(frenteId);
    }

    async getByFrenteId(frenteId) {
        return await Catalogo.findAll({
            where: { frente_id: frenteId }
        });
    }
}

module.exports = new CatalogoService();
