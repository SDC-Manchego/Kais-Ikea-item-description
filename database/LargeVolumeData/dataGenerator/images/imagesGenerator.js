/* eslint-disable class-methods-use-this */
class ImagesGenerator {
  generateCsvHeader() {
    return ['image_url'];
  }

  getImage() {
    const images = ['https://fec-piccolo.s3-us-west-1.amazonaws.com/products/FRIHETEN-bomstad+black.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/FRIHETEN-hyllie+beige.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/FRIHETEN-hyllie+dark+gray.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/FRIHETEN-skiftebo+blue.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/FRIHETEN-skiftebo+dark+gray.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/BALKARP-black.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/BALKARP-gray.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/BRATHULT-gray.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/BRATHULT-red.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/DELAKTIG-antracite.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/DELAKTIG-beige.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/DELAKTIG-blue.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/DELAKTIG-brown.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/DELAKTIG-gray.webp'];
    return images[Math.floor(Math.random() * images.length)];
  }

  generateImages(num) {
    const images = [];
    for (let i = 0; i < num; i += 1) {
      const image = [
        this.getImage(),
      ];
      images.push(image);
    }
    return images;
  }
}

module.exports = new ImagesGenerator();
