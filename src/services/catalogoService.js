const db = require('../models/db');

class CatalogoService {
    async getAll() {
        const [rows] = await db.query('SELECT * FROM catalogo');
        return rows;
    }

    async getById(id) {
        const [rows] = await db.query('SELECT * FROM catalogo WHERE id = ?', [id]);
        return rows[0];
    }

    async create(catalogo) {
        const { clave, nombre, descripcion, unidad, costo_unitario, cantidad, importe, frente_id } = catalogo;
        await db.query('INSERT INTO catalogo (clave, nombre, descripcion, unidad, costo_unitario, cantidad, importe, frente_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [clave, nombre, descripcion, unidad, costo_unitario, cantidad, importe, frente_id]);
    }

    async update(id, catalogo) {
        const { clave, nombre, descripcion, unidad, costo_unitario, cantidad, importe, frente_id } = catalogo;
        await db.query('UPDATE catalogo SET clave = ?, nombre = ?, descripcion = ?, unidad = ?, costo_unitario = ?, cantidad = ?, importe = ?, frente_id = ? WHERE id = ?', [clave, nombre, descripcion, unidad, costo_unitario, cantidad, importe, frente_id, id]);
    }

    async delete(id) {
        await db.query('DELETE FROM catalogo WHERE id = ?', [id]);
    }
}

module.exports = new CatalogoService();
