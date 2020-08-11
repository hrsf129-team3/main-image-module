var mysql      = require('mysql');
const password = require('./config.js');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : password,
  database : 'products'
});

connection.connect();


var getProductOneImages = function(callback) {
  connection.query('SELECT image_Url FROM product_images where product_id = 1', function(err, results) {
    if (err) {
      console.log("err in database", err);
    } else {
      callback(null, results);
    }
  });
};

// var getProductImages = function(callback) {
//   connection.query('SELECT  FROM ', function(err, results) {
//     if (err) {
//       console.log("err in database", err);
//     } else {
//       callback(null, results);
//     }
//   });
// };

module.exports = connection;
module.exports.getProductOneImages = getProductOneImages;