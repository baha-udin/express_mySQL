const mysql = require('mysql2');

// Create the connection pool
const dbPool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'express_mysql',
});

module.exports = dbPool.promise()
