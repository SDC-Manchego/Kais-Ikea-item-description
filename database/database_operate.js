let db = require('./connect.js');

// function to seed(insert) dataset
let product_create = (props) => {
  // create an array of product list
  let queryStr = 'INSERT INTO products (product_id, product_category, product_name, product_short_desc, product_ad_desc, product_price, product_color_image, product_color, product_age, product_avg_rev) VALUES ?';
  console.log(prodList);
  db.query(queryStr, [props], (error, results) => {
    if (error) {
      console.log('Failed to save: ', error);
    } else {
      console.log('success: ', results);
    }
  });
};

let product_read = (props) => {
  // create an array of product list
  let queryStr = 'INSERT INTO products (product_id, product_category, product_name, product_short_desc, product_ad_desc, product_price, product_color_image, product_color, product_age, product_avg_rev) VALUES ?';
  console.log(prodList);
  db.query(queryStr, [props], (error, results) => {
    if (error) {
    console.log('Failed to read: ', error);
    } else {
    console.log('success: ', results);
    }
  });
};

let product_update = (props) => {
  // create an array of product list
  let queryStr = 'INSERT INTO products (product_id, product_category, product_name, product_short_desc, product_ad_desc, product_price, product_color_image, product_color, product_age, product_avg_rev) VALUES ?';
  console.log(prodList);
  db.query(queryStr, [props], (error, results) => {
    if (error) {
    console.log('Failed to read: ', error);
    } else {
    console.log('success: ', results);
    }
  });
};

let product_delete= (props) => {
// create an array of product list
  let queryStr = 'INSERT INTO products (product_id, product_category, product_name, product_short_desc, product_ad_desc, product_price, product_color_image, product_color, product_age, product_avg_rev) VALUES ?';
  console.log(prodList);
  db.query(queryStr, [props], (error, results) => {
    if (error) {
    console.log('Failed to delete: ', error);
    } else {
    console.log('success: ', results);
    }
  });
};