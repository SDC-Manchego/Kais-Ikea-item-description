// server that connects client and database
require('newrelic');
// requirements
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbOperate = require('../database/database_operate.js');

const app = express();
const port = 9000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('client/dist'));

app.get('/api/products/:id', async (req, res) => {
  let id = req.params.id;
  try {
    await dbOperate.product_readOne(id, (err, data) =>{
      res.send(data).status(200);
    })
  } catch (err) {
    console.log( err);
  }
});

// check if app is listening
// eslint-disable-next-line no-console
app.listen(port, () => { console.log(`${Date()} listening on ${port}`); });

module.exports.app = app;
