/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
// import requirements
import React from 'react';
import $ from 'jquery';
import StarRatings from 'react-star-ratings';
import ProductOptions from './ProductOptions.jsx';
import ProductPurchase from './ProductPurchase.jsx';
import StockCheck from './StockCheck.jsx';

class ItemDescription extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
      productOptions: [],
      product: {},
    };

    this.handleProduct = this.handleProduct.bind(this);
    this.urlProductId = this.urlProductId.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:9000/api/products')
      .then((productList) => productList.json())
      .then((productList) => this.setState({ productList }))
      .then(this.handleProduct);
  }

  getItemDescriptionById(id) {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ product: this.state.productList[this.urlProductId()] });
  }

  urlProductId() {
    const questMarkLocation = (window.location.href).indexOf('?');
    if (questMarkLocation === -1) {
      return '1';
    }
    return (window.location.href).slice(questMarkLocation + 1);
  }

  // selects a random product from the list of products to display
  handleProduct() {
    // eslint-disable-next-line prefer-const
    let id = this.getItemDescriptionById(this.urlProductId);
    const productChoices = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.state.productList.length; i++) {
      if (this.state.productList[i].product_name === this.state.product.product_name) {
        productChoices.push(this.state.productList[i]);
      }
    }
    this.setState({ productOptions: productChoices });
  }

  render() {
    const revStyle = {
      textDecoration: 'none',
    };
    // console.log(this.state);
    return (
      <div className="jeff_product_details">
        <div className="product_price">
          <p className="jeff_product_age">New</p>
          <h1 className="jeff_product_heading_display">
            <span className="jeff-product_name">{this.state.product.product_name}</span>
            <span className="jeff-shortDesc">{this.state.product.product_short_desc}</span>
          </h1>
          <p className="jeff-product_cost">{`$${parseFloat(this.state.product.product_price).toFixed(2)}`}</p>
          <div className="jeff-aggregatedRating">
            <a style={revStyle} className="jeff-reviews" href="test">
              <span className="jeff-stars">
                <StarRatings
                  rating={this.state.product.product_avg_rev}
                  starRatedColor="gold"
                  numberOfStars={5}
                  starDimension="25px"
                  starSpacing="0px"
                  name="rating"
                />
                <span className="jeff-reviewValue">
                  {this.state.product.product_avg_rev}
                </span>
                <span className="numberOfRev">138 Reviews</span>
              </span>
            </a>
          </div>
        </div>
        <div className="jeff-product_ad_desc">
          <span className="adDesc">{this.state.product.product_ad_desc}</span>
        </div>
        <div className="jeff-productOptions">
          <ProductOptions
            products={this.state.productOptions}
            handleProduct={this.handleProduct}
            product={this.state.product}
          />
        </div>
        <ProductPurchase />
        <StockCheck />
      </div>
    );
  }
}

export default ItemDescription;
