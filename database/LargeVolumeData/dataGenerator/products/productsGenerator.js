/* eslint-disable class-methods-use-this */
const faker = require('faker');

class ProductGenerator {
  generateCsvHeader() {
    return ['product_category', 'product_name', 'product_short_desc', 'product_ad_desc', 'product_price', 'product_color', 'product_age', 'product_avg_rev'];
  }

  getRandomInt(min, max) {
    // eslint-disable-next-line no-param-reassign
    min = Math.ceil(min);
    // eslint-disable-next-line no-param-reassign
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomCategory() {
    const cateories = ['Kitchen', 'Living room', 'Bed room', 'Lobby', 'Rest room'];
    return cateories[this.getRandomInt(0, 4)];
  }

  getProductScore() {
    return this.getRandomInt(1, 5);
  }

  getColor() {
    const colors = ['Hyllie dark gray', 'Hyllie beige', 'Bomstad black', 'Skiftebo blue', 'Skiftebo dark gray', 'red', 'black', 'gray', 'blue', 'white', 'navy', 'pink', 'original red'];
    return colors[this.getRandomInt(0, 12)];
  }

  getProductName() {
    const names = ['BALKARP', 'BRATHULT', 'DELAKTIG', 'EKEBOL', 'FRIHETEN'];
    return names[this.getRandomInt(0, 4)];
  }

  getDescribe() {
    return faker.lorem.words();
  }

  getDsDescribe() {
    return faker.lorem.sentence();
  }

  getAssociatedProductId() {
    return this.getRandomInt(1, 10000000);
  }

  generateProducts(num) {
    const products = [];
    for (let i = 0; i < num; i += 1) {
      const product = [
        this.getRandomCategory(),
        this.getProductName(),
        this.getDescribe(),
        this.getDsDescribe(),
        this.getRandomInt(13, 666),
        this.getColor(),
        this.getRandomInt(1, 30),
        this.getRandomInt(1, 5),
      ];
      products.push(product);
    }
    return products;
  }
}

module.exports = new ProductGenerator();
