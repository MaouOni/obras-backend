const db = require('../models/db');

class EmpresaService {
    async getAll() {
        const [rows] = await db.query('SELECT * FROM empresa');
        return rows;
    }

    async getById(id) {
        const [rows] = await db.query('SELECT * FROM empresa WHERE id = ?', [id]);
        return rows[0];
    }

    async create(empresa) {
        const { nombre, razon_social, rfc, numero_iva, cmic } = empresa;
        await db.query('INSERT INTO empresa (nombre, razon_social, rfc, numero_iva, cmic) VALUES (?, ?, ?, ?, ?)', [nombre, razon_social, rfc, numero_iva, cmic]);
    }

    async update(id, empresa) {
        const { nombre, razon_social, rfc, numero_iva, cmic } = empresa;
        await db.query('UPDATE empresa SET nombre = ?, razon_social = ?, rfc = ?, numero_iva = ?, cmic = ? WHERE id = ?', [nombre, razon_social, rfc, numero_iva, cmic, id]);
    }

    async delete(id) {
        await db.query('DELETE FROM empresa WHERE id = ?', [id]);
    }
}

module.exports = new EmpresaService();
