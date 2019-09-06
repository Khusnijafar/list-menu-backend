require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'remotemysql.com',
    user:  'OhkRVIanGF',
    password: 'DuqHJO6WRg',
    database: 'OhkRVIanGF',
});

connection.connect((err) => {
    if (err) console.log(`Error: ${err}`);
});

module.exports = connection;