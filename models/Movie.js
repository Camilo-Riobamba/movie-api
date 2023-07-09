const db = require('../db');

class Movie {
    static async findAll() {
        const query = 'SELECT * FROM movies';
        const { rows } = await db.query(query);
        return rows;
    }

    static async create(name, image, synopsis, releaseYear) {
        const query =
            'INSERT INTO movies (name, image, synopsis, release_year) VALUES ($1, $2, $3, $4) RETURNING *';
        const values = [name, image, synopsis, releaseYear];
        const { rows } = await db.query(query, values);
        return rows[0];
    }

    static async addGenres(movieId, genreIds) {
        const deleteQuery = 'DELETE FROM movie_genres WHERE movie_id = $1';
        const deleteValues = [movieId];
        await db.query(deleteQuery, deleteValues);

        if (genreIds.length === 0) {
            return [];
        }

        const insertQuery =
            'INSERT INTO movie_genres (movie_id, genre_id) VALUES ($1, unnest($2::integer[])) RETURNING genre_id';
        const insertValues = [movieId, genreIds];
        const { rows } = await db.query(insertQuery, insertValues);
        return rows.map((row) => row.genre_id);
    }

    static async addActors(movieId, actorIds) {
        const deleteQuery = 'DELETE FROM movie_actors WHERE movie_id = $1';
        const deleteValues = [movieId];
        await db.query(deleteQuery, deleteValues);

        if (actorIds.length === 0) {
            return [];
        }

        const insertQuery =
            'INSERT INTO movie_actors (movie_id, actor_id) VALUES ($1, unnest($2::integer[])) RETURNING actor_id';
        const insertValues = [movieId, actorIds];
        const { rows } = await db.query(insertQuery, insertValues);
        return rows.map((row) => row.actor_id);
    }

    static async addDirectors(movieId, directorIds) {
        const deleteQuery = 'DELETE FROM movie_directors WHERE movie_id = $1';
        const deleteValues = [movieId];
        await db.query(deleteQuery, deleteValues);

        if (directorIds.length === 0) {
            return [];
        }

        const insertQuery =
            'INSERT INTO movie_directors (movie_id, director_id) VALUES ($1, unnest($2::integer[])) RETURNING director_id';
        const insertValues = [movieId, directorIds];
        const { rows } = await db.query(insertQuery, insertValues);
        return rows.map((row) => row.director_id);
    }
}

module.exports = Movie;
