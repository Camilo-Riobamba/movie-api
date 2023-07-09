const db = require('../db');

class Genre {
    static async findAll() {
        const query = 'SELECT * FROM genres';
        const { rows } = await db.query(query);
        return rows;
    }

    static async create(name) {
        const query = 'INSERT INTO genres (name) VALUES ($1) RETURNING *';
        const values = [name];
        const { rows } = await db.query(query, values);
        return rows[0];
    }
}

module.exports = Genre;
