DROP DATABASE IF EXISTS ikea_products;
CREATE DATABASE ikea_products;

\c ikea_products;

CREATE TABLE products (
  id SERIAL UNIQUE PRIMARY KEY,
  product_id INT NOT NULL,
  product_category VARCHAR(50) NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  product_short_desc TEXT NOT NULL,
  product_ad_desc TEXT NOT NULL,
  product_price INT NOT NULL,
  product_color_image TEXT NOT NULL,
  product_color TEXT NOT NULL,
  product_age INT NOT NULL,
  product_avg_rev INT NOT NULL
);
