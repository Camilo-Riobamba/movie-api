const db = require('../db');

class Actor {
    static async findAll() {
        const query = 'SELECT * FROM actors';
        const { rows } = await db.query(query);
        return rows;
    }

    static async create(firstName, lastName, nationality, image, birthday) {
        const query =
            'INSERT INTO actors (first_name, last_name, nationality, image, birthday) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const values = [firstName, lastName, nationality, image, birthday];
        const { rows } = await db.query(query, values);
        return rows[0];
    }
}

module.exports = Actor;
