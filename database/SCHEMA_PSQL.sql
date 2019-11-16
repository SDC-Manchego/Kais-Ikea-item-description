DROP DATABASE IF EXISTS ikea_products;
CREATE DATABASE ikea_products;

\c ikea_products;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  product_category VARCHAR(50) NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  product_short_desc TEXT NOT NULL,
  product_ad_desc TEXT NOT NULL,
  product_price INT NOT NULL,
  product_color TEXT NOT NULL,
  product_age INT NOT NULL,
  product_avg_rev INT NOT NULL
);

DROP TABLE IF EXISTS images;

CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  image_url TEXT NOT NULL
);

DROP TABLE IF EXISTS products_images;

CREATE TABLE products_images (
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  image_id INT NOT NULL
);
