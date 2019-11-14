/* eslint-disable import/no-extraneous-dependencies */
const createCsvWriter = require('csv-writer').createArrayCsvWriter;
const path = require('path');
const dataGenerator = require('./dataGenerator.js');

let productData;
// ignore header
const productHeader = dataGenerator.generateCsvHeader();
const csvWriter = createCsvWriter({
  path: path.join(__dirname, 'products.csv'),
  header: productHeader,
});

// monitor
const batchWriter = async (/* data, batchNumber */) => {
  await csvWriter.writeRecords(productData);
};

// 10M
const writeToCsv = async () => {
  for (let i = 0; i < 1000; i += 1) {
    productData = dataGenerator.generateProducts(10000);
    // eslint-disable-next-line no-await-in-loop
    await batchWriter(productData, i);
  }
};

writeToCsv();
// generate csv file 1:31. For test maximun generate rate is 1000 * 10000
// with present setting.
// module.exports = writeToCsv;
