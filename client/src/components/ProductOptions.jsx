/* eslint-disable jsx-a11y/label-has-associated-control */
// requirements
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#ItemDescription');

class ProductOptions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      productColor: '',
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        // eslint-disable-next-line react/prop-types
        productColor: this.props.product.product_color,
      });
    }, 500);
  }

  openModal() {
    this.setState({
      modalIsOpen: true,
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
    });
  }


  render() {
    // eslint-disable-next-line react/prop-types
    const options = this.props.products.map((color, index) => (
      // eslint-disable-next-line react/jsx-key
      // eslint-disable-next-line react/no-array-index-key
      <span className="productOption" key={index}>
        <input type="image" src={color.image_url} aria-label={color.product_color} className="jeff-productImage" />
        <label className="productLabel">{color.product_color}</label>
      </span>
    ));

    return (
      <div className="jeff-productOptions">
        <span className="jeff-productCaption">The price reflects selected options.</span>
        <span className="options">
          <button type="button" id="jeff-dropSelector" onClick={this.openModal}>
            <span className="jeff-cover">Cover:</span>
            <img className="dropDown" src="https://fec-piccolo.s3-us-west-1.amazonaws.com/keyboard_arrow_down-24px.svg" alt="down" />
            <span className="colorOption">{this.state.productColor}</span>
          </button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            shouldCloseOnOverlayClick
            contentLabel="Product Options"
            id="ReactModalPortal"
            style={{
              overlay: {
                position: 'absolute',
                top: '0px',
                left: '0px',
                right: '0px',
                bottom: '0px',

                backgroundColor: 'lightgray',
              },
              content: {
                position: 'absolute',
                top: '40px',
                left: '40px',
                right: '40px',
                bottom: '40px',
                minHeight: '80px',
                minWidth: '80px',
                border: '1px solid #ccc',
                background: '#fff',
                overflow: 'auto',
                backgroundColor: 'white',
              },
            }}
          >
            <span className="modalSetup">
              <h2 className="modalTitle">Choose Cover</h2>
              <button type="submit" className="exit" onClick={this.closeModal} label="close"><img className="x" src="https://fec-piccolo.s3-us-west-1.amazonaws.com/clear-24px.svg" alt="" /></button>
            </span>

            <form id="jeff-productForm">
              {options}
            </form>
          </Modal>
        </span>
      </div>
    );
  }
}

export default ProductOptions;
