/* eslint-disable import/no-extraneous-dependencies */
const createCsvWriter = require('csv-writer').createArrayCsvWriter;
const path = require('path');
const dataGenerator = require('./dataGenerator.js');

let productData;
const productHeader = dataGenerator.generateCsvHeader();
const csvWriter = createCsvWriter({
  path: path.join(__dirname, 'products.csv'),
  header: productHeader,
});

const batchWriter = async (data, batchNumber) => {
  await csvWriter.writeRecords(productData);
  if (batchNumber % 10 === 0) {
    // eslint-disable-next-line no-console
    console.log(batchNumber);
  }
};

const writeToCsv = async () => {
  for (let i = 0; i < 1000; i += 1) {
    productData = dataGenerator.generateProducts(10000);
    // eslint-disable-next-line no-await-in-loop
    await batchWriter(productData, i);
  }
};

writeToCsv();
