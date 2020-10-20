// feature 1
import React from 'react';
import Products from './component/products';
import data from './data/data.json';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
        products: data.products,
        size:"",
        sort: ""
    }
  }
  
  render(){
    return (
      <div className="grid-container">
        <header>
          <a href="/">React shopping</a>
  
        </header>
        <main>
       <div className="content">
         <div className="main">

   
      <Products products={this.state.products} />
         </div>

        <div className="sidebar">
          card items
        </div>
       </div>
        </main>
        <footer>
          All right reserved
  
        </footer>
      </div>
    );
  
  }
  }

export default App;
