import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ReviewProduct.css'

const ReviewProduct = ({ product, handleRemove }) => {
    console.log(product);
    const { id, img, name, price, quantity, shipping } = product;
    return (
        <div className='review-container'>
            <div className='image-container'>
                <img src={img} alt="" />
            </div>
            <div className='review-details'>
                <div className="review-text">
                    <h4>{name}</h4>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                    <p><small>Shipping: ${shipping}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemove(id)} className='btn-delete'>
                        <FontAwesomeIcon className='trash-icon' icon={faTrashAlt} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewProduct;