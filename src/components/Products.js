import React, { Component } from 'react';
import { formatCurrency } from '../util';
class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {
                        this.props.Products.map(product=>(
                            <li key={product._id}>
                                <div className="product">
                                    <a href={"#" +product._id}>
                                        <img src={product.image} alt={product.name} />
                                        <p>{product.title}</p>
                                    </a>
                                    <div className="product-price">
                                        <div>{formatCurrency(product.price)}</div>
                                        <button className="button primary">Add To Cart</button>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default Products;