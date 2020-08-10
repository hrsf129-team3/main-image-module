const exprss = require('express');
const app = express();
const PORT = 3007;
const path = require('path');

//middleware
app.use(express.json());
app.use(express.static(path.jon(__dirname, '../client/dist')))

//routes

app.get('/product/:id', function (req, res, next) {
 db.getProductImages() => {

 }
})


//start server
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Successfully listening on port:', PORT);
  }
})