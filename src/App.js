// feature 1
import React from 'react';
import { Provider } from 'react-redux';
import Cart from './component/cart';
import Filter from './component/filter';
import Products from './component/products';
import data from './data/data.json';
import store from './sotre'

class App extends React.Component {
  constructor(){
    super();
    this.state ={
        products: data.products,
        cartItems:  localStorage.getItem("cartItem")?JSON.parse(localStorage.getItem("cartItem")) :[] ,
        size: "",
        sort: ""
    }
  }
  /* sortProducts = (event) =>{
    // imp
    const sort=  event.target.value
    this.setState((state) =>({
      sort: sort,
      products: this.state.products.slice().sort((a,b) =>
        sort === "lowest" 
          ? a.price >b.price 
            ? 1
            : -1
          : sort ==="highest"
          ? a.price < b.price
            ? 1
            : -1
          :a._id > b._id
          ? 1
          : -1     
       ),
      }))
  }
  filterProducts = (event) =>{
    if(event.target.value === ""){
      this.setState({size: event.target.value, product: data.products})
    }else{
      this.setState({
        size: event.target.value,
        products: data.products.filter((product) => product.availableSizes.indexOf(event.target.value) >=0 )
      })
    }
   
  }
   */
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: product.count > 0?     
      cartItems.filter((x) =>x._id === product._id ,product.count--) 
      : cartItems.filter((x) => x._id !== product._id),
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  };
  addToCart =(product) =>{
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
      localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }
    this.setState({ cartItems });
  }

  render(){
    return (
      <Provider store={store}>
      <div className="grid-container">
        <header>
          <a href="/">React shopping</a>
  
        </header>
        <main>
       <div className="content">
         <div className="main">
      <Filter />
   
      <Products products={this.state.products} addToCart={this.addToCart} />
         </div>

        <div className="sidebar">
          <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart}/>
        </div>
       </div>
        </main>
        <footer>
          All right reserved
  
        </footer>
      </div>
      </Provider>
    );
  
  }
  }

export default App;
