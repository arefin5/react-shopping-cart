//feature-1

import React, { Component } from "react";
import Filter from "./components/Filter";
import Products from "./components/Products";
import data from "./data.json";
import Cart from './components/Cart'
class App extends Component {
  state = {
    products: data.products,
    cartItems:[] ,
    size: "",
    sort: "",
  };
    // add to cart :
    addToCart=product=>{
      let alreadyCheck=false ;
       let cartItems=this.state.cartItems.slice()
       cartItems.forEach(item=>{
         if(product._id===cartItems){
           item.count ++ ;
           alreadyCheck  =true
         }   
       })
       if(!alreadyCheck){
         cartItems.push({...product, count:1})
       }
       this.setState({cartItems})
       // console.log(cartItems)
       
     }
     // 
     removeFromCart=product=>{
       const cartItems=this.state.cartItems.slice();
       this.setState({
         cartItems:cartItems.filter(x=>x._id !== product._id),
       
       })
   
     }
// 
  sortProducts = (event) => {
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState((state) => ({
      sort: sort,
      products: this.state.products.slice().sort((a, b) =>
        sort === "lowest"
          ? a.price > b.price
            ? 1
            : -1
          : sort === "highest"
          ? a.price < b.price
            ? 1
            : -1
          : a._id < b._id
          ? 1
          : -1
      ),
    }));
  };

  filterProducts = (event) => {
    console.log(event.target.value);
    if (event.target.value === "") {
      this.setState({ size: event.target.value, products: data.products });
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        ),
      });
    }
  };

  // 
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              />
              <Products Products={this.state.products}  addToCart={this.addToCart}/>
            </div>
            <div className="sidebar">
              <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} />
            </div>
          </div>
        </main>
        <footer>All right is reserved.</footer>
      </div>
    );
  }
}

export default App;
