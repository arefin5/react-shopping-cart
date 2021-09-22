import React, { Component } from "react";
import { formatCurrency } from "../util";

class Cart extends Component {
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
                  <button className="button primary">proceed</button>
              </div>
          </div>
       )}
        
      </div>
    );
  }
}

export default Cart;
