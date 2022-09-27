import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // console.log(cart);
    const quantity = cart.reduce((p, n) => p + n.quantity, 0)
    const totalPrice = cart.reduce((p, n) => p + n.price * n.quantity, 0);
    const totalShipping = cart.reduce((p, n) => p + n.shipping, 0);
    const tax = (totalPrice * 0.1).toFixed(2);
    const grandTotal = totalPrice + totalShipping + parseFloat(tax);
    return (
        <div className='cart-design'>
            <h3>Order summary</h3>
            <p>Selected Items:{quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax}</p>
            <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
        </div>
    );
};

export default Cart;