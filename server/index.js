// server that connects client and database

// requirements
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./controller.js');
const dbOperate = require('../database/database_operate.js');

const app = express();
const port = 9000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('client/dist'));
app.use('/:id', express.static('client/dist'));


// app.get('/api/products', (req, res) => {
//   controller.ikea_products.get(req, res, (err, data) => {
//     if (err) {
//       // eslint-disable-next-line no-console
//       console.error('error connecting to server');
//       return;
//     }
//     // eslint-disable-next-line no-console
//     console.log('ikea_products connected');
//     res.send(data).status(200);
//   });
// });

app.get('/api/products/:id', (req, res) => {
  dbOperate.product_readALL((err, data) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error('error connecting to server');
      return;
    }
    // eslint-disable-next-line no-console
    res.send(data).status(200);
  });
});

app.post('/api/products/:id', (req, res) => {
  res.send('Post request to /products received');
  const { products } = req.body;
  console.log({ products });
  dbOperate.product_create(products, (err) => {
    if (err) {
      res.status(200).json({
        error: err,
        result: 'Error updating products',
      });
    } else {
      res.send('Product saved.');
    }
  });
});

app.put('/api/products/', (req, res) => {
  res.send(`Received request to update product ${req.params.id}`);
});

app.delete('/api/products/', (req, res) => {
  res.send(`Recieved request to delete product ${req.params.id}`);
//   dbOperate.product_readALL((err, data) => {
//     if (err) {
//       // eslint-disable-next-line no-console
//       console.error('error connecting to server');
//       return;
//     }
//     // eslint-disable-next-line no-console
//     console.log('ikea_products connected');
//     res.send(data).status(200);
//   });
});

// check if app is listening
// eslint-disable-next-line no-console
app.listen(port, () => { console.log(`listening on ${port}`); });

module.exports.app = app;
