import React, { Component } from 'react';
import { connect } from 'react-redux';
import formatCurrency from '../util';
import {fetchProducts} from '../actions/productAction'
class Products extends Component {
    constructor(props){
        super(props)
        this.state ={
            products: null,
        }
    }
    componentDidMount(){
        this.props.fetchProducts();
    }

    render() {
        console.log(this.props.products);
        return (
            <div>
                {this.props.products ? (
                      <ul className="products">
                      {this.props.products.map(product => (
                          <li key={product._id}>
                              <div className="product">
                                  <a href={"#" + product._id}> <img src={product.image} alt={product.title} ></img>
                                      <p>{product.title}</p>
                                  </a>
                                  <div className="product-price">
                                      <div>
                                          {formatCurrency(product.price)}
      
                                      </div>
                                      <button className="button primary">  add to cart</button>
      
                                  </div>
      
                              </div>
                          </li>
                      ))}
                  </ul>
                  
                ) :
                <div>loading...</div>
            
              
            }
                
            </div>
        );
    }
}
export default connect((state) => ({ products: state.products.filtredItems }), {
    fetchProducts,
  })(Products);