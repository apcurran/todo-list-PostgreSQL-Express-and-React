const Pool = require("pg").Pool;

let config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
};

if (process.env.NODE_ENV === "production") {
    config = {
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    };
}

const pool = new Pool(config);

module.exports = pool;