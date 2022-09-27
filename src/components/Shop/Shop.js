import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';

import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCart = (selectedProduct) => {
        // console.log(selectedProduct);
        const newCart = [...cart, selectedProduct];
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Products
                        addToCart={addToCart}
                        product={product}
                        key={product.id}
                    ></Products>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;