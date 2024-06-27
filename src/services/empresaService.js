const db = require('../models');
const Empresa = db.Empresa;

class EmpresaService {
    async getAll() {
        return await Empresa.findAll();
    }

    async getById(id) {
        return await Empresa.findByPk(id);
    }

    async create(data) {
        return await Empresa.create(data);
    }

    async update(id, data) {
        const [updated] = await Empresa.update(data, {
            where: { id: id }
        });
        if (updated) {
            return await Empresa.findByPk(id);
        }
        throw new Error('Empresa not found');
    }

    async delete(id) {
        const deleted = await Empresa.destroy({
            where: { id: id }
        });
        if (deleted) {
            return;
        }
        throw new Error('Empresa not found');
    }
}

module.exports = new EmpresaService();
