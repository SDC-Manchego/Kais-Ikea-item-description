const faker = require('faker');

class ProductGenerator {
  generateCsvHeader() {
    return ['product_id', 'product_category', 'product_name', 'product_short_desc', 'product_ad_desc', 'product_price', 'product_color_image', 'product_color', 'product_age', 'product_avg_rev'];
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getImage() {
    const images = ['https://fec-piccolo.s3-us-west-1.amazonaws.com/products/FRIHETEN-bomstad+black.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/FRIHETEN-hyllie+beige.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/FRIHETEN-hyllie+dark+gray.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/FRIHETEN-skiftebo+blue.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/FRIHETEN-skiftebo+dark+gray.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/BALKARP-black.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/BALKARP-gray.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/BRATHULT-gray.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/BRATHULT-red.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/DELAKTIG-antracite.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/DELAKTIG-beige.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/DELAKTIG-blue.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/DELAKTIG-brown.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/DELAKTIG-gray.webp'];
    return images[Math.floor(Math.random(images.length))];
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
        this.getAssociatedProductId(),
        this.getRandomCategory(),
        this.getProductName(),
        this.getDescribe(),
        this.getDsDescribe(),
        this.getRandomInt(13, 666),
        this.getImage(),
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
