let config = require('./config');
let mysql = require('mysql');

let connection = mysql.createConnection({
  host: config.db.host,
  port: config.db.port,
  user: config.db.username,
  password: config.db.password,
  database: config.db.database,
});

module.exports = connection;
