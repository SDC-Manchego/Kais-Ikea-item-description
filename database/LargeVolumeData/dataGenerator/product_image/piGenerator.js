/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
class PIGenerator {
  generateCsvHeader() {
    return ['product_id', 'image_id'];
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // for extend length of options
  getImageLength() {
    const images = ['https://fec-piccolo.s3-us-west-1.amazonaws.com/products/FRIHETEN-bomstad+black.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/FRIHETEN-hyllie+beige.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/FRIHETEN-hyllie+dark+gray.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/FRIHETEN-skiftebo+blue.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/FRIHETEN-skiftebo+dark+gray.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/BALKARP-black.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/BALKARP-gray.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/BRATHULT-gray.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/BRATHULT-red.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/DELAKTIG-antracite.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/DELAKTIG-beige.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/DELAKTIG-blue.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/DELAKTIG-brown.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/DELAKTIG-gray.webp'];
    return Math.floor((Math.random() * images.length) + 1);
  }

  generatePI(num) {
    const pis = [];
    for (let i = 0; i < num; i += 1) {
      const pi = [
        this.getRandomInt(1, 2000),
        this.getRandomInt(1, 2000),
      ];
      pis.push(pi);
    }
    return pis;
  }
}

module.exports = new PIGenerator();
