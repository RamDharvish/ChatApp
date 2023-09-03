import React, { useState } from 'react';
import {  useSelector } from 'react-redux';
import Header from '../Component/Header';
import ProductListItem from '../Component/ProductListItem';

import { useNavigate, useParams } from 'react-router-dom';
import { ProductList } from '../Data/ProductList';

function Checkout() {
    const params = useParams()
    const list = useSelector((state) => state.cart.list);

    const [state, setState] = useState(params.id ?
        [{

            ...ProductList.find(element => element.id === parseInt(params.id)),
            count: 1,
        },
        ]
        : list)

  
    const navigate = useNavigate();

    const incrementItem = (item) => {
        const index = state.findIndex(product => product.id === item.id);
        setState((state)=> [
            ...state.slice(0,index),
            {...item, count: item.count + 1},
            ...state.slice(index + 1)
        ])
    };

    const decrementItem = (item) => {
        if (item.count === 1) {
            handleRemoveItemFromCart(item)
        } else {
            const index = state.findIndex(product => product.id === item.id);
            setState((state)=> [
                ...state.slice(0,index),
                {...item, count: item.count - 1},
                ...state.slice(index + 1)
            ])
        }
    };

    const handleRemoveItemFromCart = (item) => {
        const index = state.findIndex(product => product.id === item.id);
        setState((state)=> [
            ...state.slice(0,index),
            
            ...state.slice(index + 1)
        ])
    };

    return (
        <div>
            <Header />
            {state.length > 0 ? (
                <div>
                    {state.map((item) => (
                        <ProductListItem
                            key={item.id}
                            {...item}
                            incrementItem={() => incrementItem(item)}
                            decrementItem={() => decrementItem(item)}
                            removeItem={() => handleRemoveItemFromCart(item)}
                        />
                    ))}
                    <div className='d-flex justify-content-center mt-3'>
                        <button className='btn btn-success' onClick={() => navigate('/success')}>
                            Place Order
                        </button>
                    </div>
                </div>
            ) : (
                <h3 className='d-flex justify-content-center mt-5 text-danger'>No items in the Checkout</h3>
            )}
        </div>
    );
    
}

export default Checkout;
