// Database connection

const { Client } = require('pg');
// const randProdList = require('mysql');
require('dotenv').config();


// connection details
const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_,USER
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
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
