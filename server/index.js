
const express = require('express');
const app = express();
const PORT = 3007;
const path = require('path');

//middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')))

//routes

app.get('/product/:id', function (req, res, next) {

  console.log(req.body);
//  db.getProductImages() => {

//  }
//  db.getProductImages() => {

//  }
})


//start server
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Successfully listening on port:', PORT);
  }
})