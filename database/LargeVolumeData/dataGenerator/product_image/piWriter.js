/* eslint-disable import/no-extraneous-dependencies */
const createCsvWriter = require('csv-writer').createArrayCsvWriter;
const path = require('path');
const PIGenerator = require('./piGenerator.js');

let PIData;
// ignore header
const PIHeader = PIGenerator.generateCsvHeader();
const csvWriter = createCsvWriter({
  path: path.join(__dirname, '../', 'CSVfiles', 'PI.csv'),
  header: PIHeader,
});

// monitor
const batchWriter = async (/* data, batchNumber */) => {
  await csvWriter.writeRecords(PIData);
};

// 10M
const writeToCsv = async () => {
  for (let i = 0; i < 2000; i += 1) {
    PIData = PIGenerator.generatePI(20000);

    // eslint-disable-next-line no-await-in-loop
    await batchWriter(PIData, i);
  }
};

writeToCsv();
