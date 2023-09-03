import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Component/Header';
import ProductListItem from '../Component/ProductListItem';
import { modifyItem, removeItem } from '../Redux/reducer/Cart';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const list = useSelector((state) => state.cart.list);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const incrementItem = (item) => {
        dispatch(modifyItem({ ...item, count: item.count + 1 }));
    };

    const decrementItem = (item) => {
        if (item.count === 1) {
            dispatch(removeItem(item));
        } else {
            dispatch(modifyItem({ ...item, count: item.count - 1 }));
        }
    };

    const handleRemoveItemFromCart = (item) => {
        dispatch(removeItem(item));
    };

    return (
        <div>
            <Header />
            {list.length > 0 ? (
                <div>
                    {list.map((item) => (
                        <ProductListItem
                            key={item.id}
                            {...item}
                            incrementItem={() => incrementItem(item)}
                            decrementItem={() => decrementItem(item)}
                            removeItem={() => handleRemoveItemFromCart(item)}
                        />
                    ))}
                    <div className='d-flex justify-content-center mt-3'>
                        <button className='btn btn-success' onClick={() => navigate('/checkout')}>
                            Go To Checkout
                        </button>
                    </div>
                </div>
            ) : (
                <h3 className='d-flex justify-content-center mt-5 text-danger'>No items in the Cart</h3>
            )}
        </div>
    );
}

export default Cart;
