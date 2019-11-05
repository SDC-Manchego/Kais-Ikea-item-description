// require dummy data
// require access to database
const randProdList = require('./dummyData.js');
const db = require('./connect.js');

// function to seed(insert) dataset
const seedData = (quantity) => {
  // create an array of product list

  const prodList = randProdList(quantity);
  const queryStr = 'INSERT INTO products (product_id, product_category, product_name, product_short_desc, product_ad_desc, product_price, product_color_image, product_color, product_age, product_avg_rev) VALUES ?';
  // console.log(prodList);
  db.query(queryStr, [prodList], (error, results) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log('Failed to seed: ', error);
    } else {
      // eslint-disable-next-line no-console
      console.log('success: ', results);
    }
  });
};

seedData(100);
