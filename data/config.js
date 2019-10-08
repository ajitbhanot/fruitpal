const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'root',
    password: '9Passw0rd!',
    database: 'apiCom',
};
const pool = mysql.createPool(config);
module.exports = pool;