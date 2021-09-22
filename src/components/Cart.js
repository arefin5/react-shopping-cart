import React, { Component } from "react";
import { formatCurrency } from "../util";

class Cart extends Component {
  state={
    name: "",
      email: "",
      address: "",
    showCheckout:false
  }
  handleInput=e=>{
   this.setState({[e.target.name]:e.target.value})
  }
  createOrder = (e) => {
    e.preventDefault();
    const order = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      cartItems: this.props.cartItems,
    };
    this.props.createOrder(order);
  };
  render() {
    const { cartItems } = this.props;

    return (
      <div>
        {cartItems.length === 0 ? (
          <div>Cart is empty</div>
        ) : (
          <div>your Have {cartItems.length} In the cart</div>
        )}

        <div className="cart">
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item._id}>
                <div>
                  <img src={item.image} alt={item.title}></img>
                </div>
                <div>
                  <div>{item.title}</div>
                  <div className="right">
                    {formatCurrency(item.price)}X {item.count}{" "}
                    <button
                      className="button"
                      onClick={() => this.props.removeFromCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          
        </div>
        {/*  */}
        
       {cartItems.length !== 0 &&(
        <div>
        <div className="cart">
              <div className="total">
                  <div>
                    total:{" "}
                  {
                    formatCurrency( 
                         cartItems.reduce((a,c)=>a+ c.price *c.count ,0   )
                    )

                  }
                  </div>
                  <button
                   onClick={()=>{
                     this.setState({showCheckout:true})
                     }} 
                  
                  className="button primary">proceed</button>
              </div>
          </div>
          {/*  */}
         {this.state.showCheckout && (
           <div className="cart">
             <form onSubmit={this.createOrder}>
             <ul className="form-container">
                      <li>
                        <label>Email</label>
                        <input
                          name="email"
                          type="email"
                          required
                          onChange={this.handleInput}
                        ></input>
                      </li>
                      <li>
                        <label>Name</label>
                        <input
                          name="name"
                          type="text"
                          required
                          onChange={this.handleInput}
                        ></input>
                      </li>
                      <li>
                        <label>Address</label>
                        <input
                          name="address"
                          type="text"
                          required
                          onChange={this.handleInput}
                        ></input>
                      </li>
                      <li>
                        <button className="button primary" type="submit">
                          Checkout
                        </button>
                      </li>
                    </ul>
             </form>
           </div>
         )}
         </div>
       )}
        
      </div>
    );
  }
}

export default Cart;
