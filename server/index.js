
const express = require('express');
const app = express();
const PORT = 3007;
const path = require('path');
const db = require('../db/index.js')
const expressStaticGzip = require("express-static-gzip");

//middleware
app.use('/products/:id', express.json());
// app.use('/products/:id', express.static(path.join(__dirname, '../client/dist')))
app.use('/products/:id', expressStaticGzip(path.join(__dirname, '../client/dist'), { enableBrotli: true, orderPreference: ['br'] }));

//routes

//sample api route for product 1
// app.get('/product1', function (req, res, next) {
//   console.log('req.body', req.body);
//   db.getProductOneImages((err, results) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       // console.log(results);
//       res.status(200).send(results);
//     }
//   });
// });

//sample api route for product 1 all info
// app.get('/product1info', function (req, res, next) {
//   // console.log('req.body', req.body);
//   console.log('hit the proxy')
//   db.getProductOneInfo((err, results) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       // console.log(results);
//       res.status(200).send(results);
//     }
//   });
// });

//dynamic api route for 1 product info
app.get('/images/:id', function (req, res, next) {
  var productID = req.params.id;
  db.getProductInfo(productID, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      // console.log(results);
      res.status(200).send(results);
    }
  });
});


//start server
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Successfully listening on port:', PORT);
  }
})