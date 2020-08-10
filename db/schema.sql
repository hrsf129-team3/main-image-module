-- use run 'mysql -u root -p < db/schema.sql' to run file

DROP DATABASE IF EXISTS products;

CREATE DATABASE products;

USE products;

Create Table product_skus (
  id INT PRIMARY KEY
);

CREATE table product_images (
  id INT PRIMARY KEY AUTO_INCREMENT,
  image_order INT,
  image_url VARCHAR(150),
  product_id INT,
  FOREIGN KEY (product_id)
    REFERENCES product_skus(id)
);

-- -- 1 = african lamp

-- produc_images
-- -- 1 1 image1.com 1
-- -- 2 2 image2.com 1
-- -- 3 3 image3.com 1
-- -- 4 4 image4.com 1

