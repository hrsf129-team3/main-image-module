var faker = require('faker');
var db = require('./index.js');

// var products = [1, 2, 3, 4, 5, 6];

let seedProductSKUs = () => {
  const productQuery = `INSERT INTO product_skus (id) VALUES (1), (2), (3), (4), (5), (6)`;
  db.query(productQuery, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log('product images shown', results)
    }
  })
}

seedProductSKUs();

const product1 = ['https://etsy-main-image-module.s3-us-west-1.amazonaws.com/african-lamp/african+lamp+1.jpg', 'https://etsy-main-image-module.s3-us-west-1.amazonaws.com/african-lamp/african+lamp+2.jpg', 'https://etsy-main-image-module.s3-us-west-1.amazonaws.com/african-lamp/african+lamp+3.jpg', 'https://etsy-main-image-module.s3-us-west-1.amazonaws.com/african-lamp/african+lamp+4.jpg'];
const product2 = ['https://etsy-main-image-module.s3-us-west-1.amazonaws.com/avocadont-pin/avocadont+1.jpg', 'https://etsy-main-image-module.s3-us-west-1.amazonaws.com/avocadont-pin/avocadont+2.jpg', 'https://etsy-main-image-module.s3-us-west-1.amazonaws.com/avocadont-pin/avocadont+3.jpg', 'https://etsy-main-image-module.s3-us-west-1.amazonaws.com/avocadont-pin/avocadont+4.jpg'];
const product3 = ['https://etsy-main-image-module.s3-us-west-1.amazonaws.com/daisy-the-labrador/daisy+lab+1.jpg', 'https://etsy-main-image-module.s3-us-west-1.amazonaws.com/daisy-the-labrador/daisy+lab+2.jpg', 'https://etsy-main-image-module.s3-us-west-1.amazonaws.com/daisy-the-labrador/daisy+lab+3.jpg', 'https://etsy-main-image-module.s3-us-west-1.amazonaws.com/daisy-the-labrador/daisy+lab+4.jpg', 'https://etsy-main-image-module.s3-us-west-1.amazonaws.com/daisy-the-labrador/daisy+lab+5.jpg', 'https://etsy-main-image-module.s3-us-west-1.amazonaws.com/daisy-the-labrador/daisy+lab+6.jpg', 'https://etsy-main-image-module.s3-us-west-1.amazonaws.com/daisy-the-labrador/daisy+lab+7.jpg', 'https://etsy-main-image-module.s3-us-west-1.amazonaws.com/daisy-the-labrador/daisy+lab+8.jpg', 'https://etsy-main-image-module.s3-us-west-1.amazonaws.com/daisy-the-labrador/daisy+lab+9.jpg', 'https://etsy-main-image-module.s3-us-west-1.amazonaws.com/daisy-the-labrador/daisy+lab+10.jpg'];
const product4 = ['https://etsy-main-image-module.s3-us-west-1.amazonaws.com/face-masks/face+mask+1.jpg', 'https://etsy-main-image-module.s3-us-west-1.amazonaws.com/face-masks/face+mask+2.jpg', 'https://etsy-main-image-module.s3-us-west-1.amazonaws.com/face-masks/face+mask+3.jpg', 'https://etsy-main-image-module.s3-us-west-1.amazonaws.com/face-masks/face+mask+4.jpg'];
const product5 = ['https://etsy-main-image-module.s3-us-west-1.amazonaws.com/necklaces/necklace+1.jpg', 'https://etsy-main-image-module.s3-us-west-1.amazonaws.com/necklaces/necklace+2.jpg', 'https://etsy-main-image-module.s3-us-west-1.amazonaws.com/necklaces/necklace+3.jpg', 'https://etsy-main-image-module.s3-us-west-1.amazonaws.com/necklaces/necklace+4.jpg'];
const product6 = ['https://etsy-main-image-module.s3-us-west-1.amazonaws.com/stackable-rings/stackable+ring+1.jpg', 'https://etsy-main-image-module.s3-us-west-1.amazonaws.com/stackable-rings/stackable+ring+2.jpg', 'https://etsy-main-image-module.s3-us-west-1.amazonaws.com/stackable-rings/stackable+ring+3.jpg', 'https://etsy-main-image-module.s3-us-west-1.amazonaws.com/stackable-rings/stackable+ring+4.jpg'];
const allProducts = [product1, product2, product3, product4, product5, product6];

let seedProductImages = () => {
  for (var i = 0; i < allProducts.length; i++) {
    for (var j = 0; j < allProducts[i].length; j++) {
      var productImageQuery = `INSERT INTO product_images (image_order, image_url, product_id) VALUES (${j+1}, '${allProducts[i][j]}', ${[i+1]})`;
      // console.log("test")
      db.query(productImageQuery, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          console.log('product images shown', results)
          // callback(null, results);
        }
      });
    }
  };
}

seedProductImages();
