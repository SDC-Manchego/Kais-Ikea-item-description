//Database connection

const mysql = require('mysql');
const randProdList = require('mysql');


//connection details
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'ikea_products'
});

connection.connect(function(err){
  //use err first callback patter to test connection
  if(err){
    return console.log('Error connecting to database.', err);
  }
  console.log('Ikea details Connected');
});


module.exports = connection;