// server that connects client and database

// requirements
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./controller.js');

const app = express();
const port = 9000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('client/dist'));

app.get('/api/products', (req, res) => {
  controller.ikea_products.get(req, res, (err, data) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error('error connecting to server');
      return;
    }
    // eslint-disable-next-line no-console
    console.log('ikea_products connected');
    res.send(data).status(200);
  });
});

// check if app is listening
// eslint-disable-next-line no-console
app.listen(port, () => { console.log(`listening on ${port}`); });

module.exports.app = app;
