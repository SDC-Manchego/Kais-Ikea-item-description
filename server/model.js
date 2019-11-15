// uses ../database/index.js to connect to the mysql database
const connection = require('../database/connect.js');

module.exports = {
  ikea_products: {
    // get request to get all product records in the database
    get(callback) {
      const queryStr = 'SELECT * FROM products where id < 100';
      connection.query(queryStr, (err, res) => {
        callback(err, res);
      });
    },
  },
};
