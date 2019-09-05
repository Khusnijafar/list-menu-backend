require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'remotemysql.com',
    user: process.env.DB_USER || 'OhkRVIanGF',
    password: process.env.DB_PASS || 'DuqHJO6WRg',
    database: process.env.DB_NAME || 'OhkRVIanGF',
});

connection.connect((err) => {
    if (err) console.log(`Error: ${err}`);
});

module.exports = connection;