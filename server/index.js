
const express = require('express');
const app = express();
const PORT = 3007;
const path = require('path');
const db = require('../db/index.js')

//middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')))

//routes

//sample api route for product 1
app.get('/product1', function (req, res, next) {
  console.log('req.body', req.body);
  db.getProductOneImages((err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      // console.log(results);
      res.status(200).send(results);
    }
  });
});

//sample api route for product 1 all info
app.get('/product1info', function (req, res, next) {
  // console.log('req.body', req.body);
  db.getProductOneInfo((err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      // console.log(results);
      res.status(200).send(results);
    }
  });
});

//sample api route for product 1 all info
app.get('/data/id', function (req, res, next) {
  var productID = req.param.id;
  console.log('req.param', req.param.id);
  db.getProductInfo((err, results) => {
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