/* eslint-disable import/no-extraneous-dependencies */
const createImgWriter = require('csv-writer').createArrayCsvWriter;
const path = require('path');
const dataGenerator = require('./imagesGenerator.js');

let imagesData;
// ignore header
const imagesHeader = dataGenerator.generateCsvHeader();
const imgWriter = createImgWriter({
  path: path.join(__dirname,'../', 'CSVfiles', 'images.csv'),
  header: imagesHeader,
});

// monitor
const batchWriter = async (/* data, batchNumber */) => {
  await imgWriter.writeRecords(imagesData);
};

// 10M
const writeToCsv = async () => {
  for (let i = 0; i < 100; i += 1) {
    imagesData = dataGenerator.generateImages(10000);

    // eslint-disable-next-line no-await-in-loop
    await batchWriter(imagesData, i);
  }
};

writeToCsv();
