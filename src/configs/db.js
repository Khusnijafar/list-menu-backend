require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'remotemysql.com' || process.env.DB_HOST,
    user:  'OhkRVIanGF' || process.env.DB_USER,
    password: 'DuqHJO6WRg' ||  process.env.DB_PASS,
    database: 'OhkRVIanGF' || process.env.DB_NAME ,
});

connection.connect((err) => {
    if (err) console.log(`Error: ${err}`);
});

module.exports = connection;