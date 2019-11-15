// Database connection

const mysql = require('mysql');
// const randProdList = require('mysql');


// connection details
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'ikea_products',
});

// eslint-disable-next-line consistent-return
connection.connect((err) => {
// use err first callback patter to test connection
  if (err) {
    // eslint-disable-next-line no-console
    return console.log('Error connecting to database.', err);
  }
  // eslint-disable-next-line no-console
  console.log('Ikea details Connected');
});


module.exports = connection;
