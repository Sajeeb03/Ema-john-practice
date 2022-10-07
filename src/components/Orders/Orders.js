import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewProduct from '../ReviewProduct/ReviewProduct';

const Orders = () => {
    const data = useLoaderData();
    const { previousCart } = data;
    const [cart, setCart] = useState(previousCart);
    const handleRemove = id => {
        const rest = cart.filter(product => product.id !== id);
        setCart(rest);
        removeFromDb(id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cart.map(product => <ReviewProduct
                        key={product.id}
                        product={product}
                        handleRemove={handleRemove}
                    />)
                }
            </div>
            <div className='cart-container'>
                <Cart handleClearCart={handleClearCart} cart={cart} />
            </div>
        </div>

    );
};

export default Orders;