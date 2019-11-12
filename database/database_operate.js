/* eslint-disable camelcase */
const db = require('./connect.js');

// function to seed(insert) dataset
const product_create = (props, callback) => {
  // create an array of product list
  const queryStr = 'INSERT INTO products (product_id, product_category, product_name, product_short_desc, product_ad_desc, product_price, product_color_image, product_color, product_age, product_avg_rev) VALUES ?';
  // console.log(prodList);
  db.query(queryStr, { props }, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

const product_read = (id, callback) => {
  // create an array of product list
  const queryStr = `SELECT * FROM products where product_id = ${id}`;
  // console.log(prodList);
  db.query(queryStr, id, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

const product_update = (id, newData, callback) => {
  // create an array of product list
  const queryStr = `UPDATE products SET ? WHERE product_id = ${id}`;
  // console.log(prodList);
  db.query(queryStr, newData, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

const product_delete = (id, callback) => {
// create an array of product list
  const queryStr = `DELETE from products WHERE product_id = ${id}`;
  // console.log(prodList);
  db.query(queryStr, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  product_create,
  product_read,
  product_update,
  product_delete,
};
