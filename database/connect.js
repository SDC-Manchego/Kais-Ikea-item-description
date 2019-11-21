// Database connection
const { Pool } = require('pg');
// const mysql = require('mysql');
// const randProdList = require('mysql');


// connection details
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '123',
//   database: 'ikea_products',
// });

const pool = new Pool({
  user: 'postgres',
  host: 'ec2-13-52-247-197.us-west-1.compute.amazonaws.com',
  database: 'ikea_products',
  password: '123',
  port: "5432",
});

// eslint-disable-next-line consistent-return
pool.connect((err) => {
// use err first callback patter to test connection
  if (err) {
    // eslint-disable-next-line no-console
    return console.log('Error connecting to database.', err);
  }
  // eslint-disable-next-line no-console
  console.log('Ikea details Connected');
});


module.exports = pool;
