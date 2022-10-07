import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewProduct from '../ReviewProduct/ReviewProduct';

const Orders = () => {
    const data = useLoaderData();
    const { previousCart } = data;
    const [cart, setCart] = useState(previousCart)
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cart.map(product => <ReviewProduct
                        key={product.id}
                        product={product}
                    />)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} />
            </div>
        </div>

    );
};

export default Orders;