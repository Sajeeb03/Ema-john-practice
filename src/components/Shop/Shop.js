import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getTheCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);


    useEffect(() => {
        const shoppingCart = getTheCart();
        const savedCart = [];
        for (const id in shoppingCart) {
            const savedItem = products.find(product => product.id === id);
            if (savedItem) {
                const quantity = shoppingCart[id];
                savedItem.quantity = quantity;
                savedCart.push(savedItem);
                // console.log(savedItem);
            }
        }
        setCart(savedCart)
    }, [products])

    const addToCart = (selectedProduct) => {
        // console.log(selectedProduct);
        let newCart;
        const exist = cart.find(product => selectedProduct.id === product.id)
        // console.log(exist);
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, selectedProduct]
        }
        setCart(newCart)
        addToDb(selectedProduct.id);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products?.length && products.map(product => <Products
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