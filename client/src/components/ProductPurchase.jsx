/* eslint-disable jsx-a11y/label-has-associated-control */
// requirements
import React from 'react';

class ProductPurchase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
    };
  }

  handleIncrease() {
    this.setState((prevState) => ({ quantity: prevState.quantity + 1 }));
  }

  handleDecrease() {
    if (this.state.quantity === 0) {
      this.setState((prevState) => ({ quantity: prevState.quantity }));
    } else {
      this.setState((prevState) => ({ quantity: prevState.quantity - 1 }));
    }
  }

  render() {
    return (
      <div className="jeff-productPurchase">
        <form className="jeff-quantityForm">
          <div className="jeff-quantitySpace">
            <span className="jeff-quantityAlign">
              <label className="jeff-quantity">Quantity</label>
              <div className="jeff-quantityControls">
                <button className="jeff-quantityChange" id="minus" type="button" onClick={this.handleDecrease.bind(this)}>
                  <img src="https://fec-piccolo.s3-us-west-1.amazonaws.com/remove-24px.svg" alt="minus" />
                </button>
                <input type="number" className="jeff-amount" min="1" max="999" value={this.state.quantity} />
                <button className="jeff-quantityChange" type="button" onClick={this.handleIncrease.bind(this)}>
                  <img src="https://fec-piccolo.s3-us-west-1.amazonaws.com/add-24px+(1).svg" alt="add" />
                </button>
              </div>
            </span>
          </div>
          <button className="jeff-addCart" type="button">
            <span>
              <img className="jeff-shoppingBag" src="https://fec-piccolo.s3-us-west-1.amazonaws.com/shopping+bag.png" alt="shoppingBag" />
              <span className="jeff-shopText">Add to shopping Bag</span>
            </span>
          </button>
          <button className="addList" type="button">
            <span>
              <img className="jeff-shoppingList" src="https://fec-piccolo.s3-us-west-1.amazonaws.com/shopping+list.png" alt="shoppingBag" />
              <span className="jeff-shopText">Add to shopping list</span>
            </span>
          </button>
        </form>
      </div>
    );
  }
}

export default ProductPurchase;
