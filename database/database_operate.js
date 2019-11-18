/* eslint-disable camelcase */
const db = require('./connect.js');

// function to seed(insert) dataset
// const product_create = (props, callback) => {
//   // create an array of product list
//   const queryStr = 'INSERT INTO products (product_category, product_name, product_short_desc, product_ad_desc, product_price, product_color, product_age, product_avg_rev) VALUES ?';
//   // console.log(prodList);
//   db.query(queryStr, { props }, (error, results) => { error ? callback(error, null) : callback(null, results); });
// };

const product_readOne = (id, callback) => {
    // create an array of product list
    const queryStr = `select * from products p inner join products_images pi on p.id = ${id} and pi.product_id = ${id} inner join images i on pi.image_id = i.id order by p.id`;
    // console.log(prodList);
    db.query(queryStr, (error, results) => { error ? callback(error) : callback(null, results); });
};

// const product_update = (id, newData, callback) => {
//   // create an array of product list
//   const queryStr = `UPDATE products SET ? WHERE id = ${id}`;
//   // console.log(prodList);
//   db.query(queryStr, newData, (error, results) => { error ? callback(error, null) : callback(null, results); });
// };

const product_delete = (id, callback) => {
// create an array of product list
  const queryStr = `DELETE from products WHERE id = ${id}`;
  // console.log(prodList);
  db.query(queryStr, (error, results) => { error ? callback(error, null) : callback(null, results); });
};

// console.log(product_readOne(7000, (a, b) => { console.log(a, b); }));

module.exports = {
  // product_create,
  product_readOne,
  // product_update,
  product_delete,
};
