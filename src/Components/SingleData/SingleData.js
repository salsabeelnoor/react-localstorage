import React from 'react';
import './SingleData.css'
import { addToLocalStorage, removeFromLocalStorage } from '../Utils/Utils';

const SingleData = (props) => {
    const {_id, name, price} = props.data;

    const addToCart = (id) => {
        console.log('item added',id);
        addToLocalStorage(id);
    }

    const removeFromCart = (id) => {
        removeFromLocalStorage(id);
    }
    return (
        <div className='singleData'>
            <h3>Buy this: {name}</h3>
            <p>Only for: {price}$</p>
            <p><small>ID: {_id}</small></p>
            <button onClick={() => addToCart(_id)}>Add to Cart</button>
            <button onClick={() => removeFromCart(_id)}>Remove</button>
        </div>
    );
};

export default SingleData;