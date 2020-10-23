import React, { Component } from 'react';
import { connect } from 'react-redux';
import formatCurrency from '../util';
import { fetchProducts } from '../actions/productAction'
import { Fade } from 'react-reveal/Fade';
import Modal from 'react-modal';
import {Zoom} from 'react-reveal/Zoom';

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: null,

        }
    }
    componentDidMount() {
        this.props.fetchProducts();
    }

    openModal = (product) => {
        this.setState({ product });
      };
      closeModal = () => {
        this.setState({ product: null });
      };
    render() {
        
        const { product } = this.state;
        return (
            <div>
               
                    {!this.props.products ?
                        (<div> Loading</div>  )
                        : (<ul className="products">
                            {this.props.products.map(product => (
                                <li key={product._id}>
                                    <div className="product">
                                        <a href={"#" + product._id} onClick={() => this.openModal()}
                                        > <img src={product.image} alt={product.title} ></img>
                                            <p>{product.title}</p>
                                        </a>
                                        <div className="product-price">
                                            <div>
                                                {formatCurrency(product.price)}

                                            </div>
                                            <button onClick={() => { this.props.addToCart(product) }} className="button primary">  add to cart</button>

                                        </div>

                                    </div>
                                </li>
                            ))}
                        </ul>
                        
                        )}
               
                {product && (<Modal isOpen={true}>
                    <Zoom>
                        <button > close</button>
                        <div>Modal </div>
                    </Zoom>
                </Modal>

                )}

            </div>
        );
    }
}
export default connect((state) => ({ products: state.products.filtredItems }), {
    fetchProducts,
})(Products);