/* eslint-disable camelcase */
const db = require('./connect.js');

// function to seed(insert) dataset
const product_create = (props, callback) => {
  // create an array of product list
  const queryStr = 'INSERT INTO products (product_category, product_name, product_short_desc, product_ad_desc, product_price, product_color_image, product_color, product_age, product_avg_rev) VALUES ?';
  // console.log(prodList);
  db.query(queryStr, { props }, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

const product_readOne = (id, callback) => {
  // create an array of product list
  const queryStr = `select * from products p inner join products_images pi on p.id = ${id} and p.id = pi.product_id inner join images i on pi.image_id = i.id`;
  // console.log(prodList);
  db.query(queryStr, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

const product_update = (id, newData, callback) => {
  // create an array of product list
  const queryStr = `UPDATE products SET ? WHERE id = ${id}`;
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
  const queryStr = `DELETE from products WHERE id = ${id}`;
  // console.log(prodList);
  db.query(queryStr, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

// console.log(product_readOne(41, (a, b) => { console.log(a, b); }));

module.exports = {
  product_create,
  product_readOne,
  product_update,
  product_delete,
};
