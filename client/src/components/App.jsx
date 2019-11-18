/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
// import requirements
import React from 'react';
// import $ from 'jquery';
import StarRatings from 'react-star-ratings';
import ProductOptions from './ProductOptions.jsx';
import ProductPurchase from './ProductPurchase.jsx';
import StockCheck from './StockCheck.jsx';

class ItemDescription extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
      // productOptions: [],
      product: {},
    };

    this.handleProduct = this.handleProduct.bind(this);
    this.urlProductId = this.urlProductId.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:9000/api/products/' + this.urlProductId())
      .then((productList) => productList.json())
      .then((productList) => this.setState({
        productList: productList.rows,
      }))
      .then(this.handleProduct);
  }

  getItemDescriptionById() {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ product: this.state.productList[0] });
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
    this.getItemDescriptionById();
  }

  render() {
    const revStyle = {
      textDecoration: 'none',
    };
    return (
      <div className="jeff_product_details">
        <div className="product_price">
          <p className="jeff_product_age">New</p>
          <h1 className="jeff_product_heading_display">
            <span className="jeff-product_name">{this.state.product.product_name}</span>
            <span className="jeff-shortDesc">{this.state.product.product_short_desc}</span>
          </h1>
          <p className="jeff-product_cost">{`$${this.state.product.product_price}.00`}</p>
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
            products={this.state.productList}
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
