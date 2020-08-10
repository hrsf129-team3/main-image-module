var mysql      = require('mysql');
const password = require('./config.js');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : password,
  database : 'products'
});

connection.connect();

module.exports = connection;