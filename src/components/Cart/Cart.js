import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce( (total, item) => total + item.price, 0)
    return (
        <div>
            <h4>Order Summary</h4> <br/>
            <p>Training Ordered: {cart.length}</p>
            <p>Total Price: {total}</p>
        </div>
    );
};

export default Cart;