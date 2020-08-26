var mysql      = require('mysql');
// const password = require('./config.js');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'products'
});

connection.connect();

// var getProductOneImages = function(callback) {
//   connection.query('SELECT image_Url FROM product_images where product_id = 1', function(err, results) {
//     if (err) {
//       console.log("err in database", err);
//     } else {
//       callback(null, results);
//     }
//   });
// };

// var getProductOneInfo = function(callback) {
//   connection.query('SELECT * FROM product_images where product_id = 3', function(err, results) {
//     if (err) {
//       callback(err);
//     } else {
//       callback(null, results);
//     }
//   });
// };

var getProductInfo = function(productID, callback) {
  console.log(productID, "productID")
  connection.query(`SELECT * FROM product_images where product_id = ${productID}`, function(err, results) {
    if (err) {
      console.log("err in database", err);
    } else {
      callback(null, results);
    }
  });
};

module.exports = connection;
// module.exports.getProductOneImages = getProductOneImages;
// module.exports.getProductOneInfo = getProductOneInfo;
module.exports.getProductInfo = getProductInfo;