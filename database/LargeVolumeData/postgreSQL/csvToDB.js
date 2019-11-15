// install & import pg module
// for connecting, import Pool and Client
const { Pool, Client } = require('pg');
// may need path.join
const path = require('path');

( async ()=> {
    const pool = new Pool({
    user: 'postgres',
    database: 'ikea_products',
    password: '123',
    });

    const client = await pool.connect();

    const csvPath = 'g:\\Study\\Hack\ Reactor\\Visual\ Studio\\repo\\SDC\\Kais-Ikea-item-description\\database\\LargeVolumeData\\dataGenerator\\products.csv';
    // console.log(csvPath);
    // query Copy
    const dbQuery = `COPY products (product_category, product_name, product_short_desc, product_ad_desc, product_price, product_color_image, product_color, product_age, product_avg_rev) from '${csvPath}' DELIMITER \',\' CSV HEADER`;

    try {
      await client.query(dbQuery);
    } catch (err) {
      console.log(err);
    } finally {
      client.release();
    };
})();
