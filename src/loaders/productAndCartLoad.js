import { getTheCart } from "../utilities/fakedb";

export const productAndCartLoad = async () => {
    const productsData = await fetch('products.json')
    const products = await productsData.json();
    const savedCart = getTheCart();
    const previousCart = [];
    for (const id in savedCart) {
        const savedProduct = products.find(product => product.id === id);
        const quantity = savedCart[id]
        console.log(savedCart)
        savedProduct.quantity = quantity;
        previousCart.push(savedProduct)
    }

    return { products, previousCart };
}

