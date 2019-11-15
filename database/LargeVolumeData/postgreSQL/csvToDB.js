/* eslint-disable no-useless-escape */
// install & import pg module
// for connecting, import Pool and Client
const { Pool } = require('pg');
// may need path.join
const path = require('path');

const pool = new Pool({
  user: 'postgres',
  database: 'ikea_products',
  password: '123',
});
const csvFileNames = ['products.csv', 'images.csv', 'PI.csv'];

csvFileNames.forEach((fileName, index) => {
  const csvPath = path.join(__dirname, '/..', '/dataGenerator', '/CSVfiles', fileName);
  const dbQuery = [
    `COPY products (product_category, product_name, product_short_desc, product_ad_desc, product_price, product_color, product_age, product_avg_rev) from '${csvPath}' DELIMITER \',\' CSV HEADER`,
    // eslint-disable-next-line no-useless-escape
    `COPY images (image_url) from '${csvPath}' DELIMITER \',\' CSV HEADER`,
    `COPY products_images (product_id, image_id) from '${csvPath}' DELIMITER \',\' CSV HEADER`,
  ];
  (async () => {
    const client = await pool.connect();
    try {
      await client.query(dbQuery[index]);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    } finally {
      client.release();
    }
  })();
});
