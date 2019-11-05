// connection between server and the model for the client to send the get request
const model = require('./model.js');

module.exports = {
  ikea_products: {
    get(req, res) {
      model.ikea_products.get((err, results) => {
        if (err) throw err;
        // eslint-disable-next-line no-console
        console.log('got response');
        res.json(results);
      });
    },
  },
};
