const { Pool } = require('pg');
const config = require('./config');

// Crea una nueva instancia del cliente de la base de datos PostgreSQL
const pool = new Pool(config.db);

module.exports = pool;
