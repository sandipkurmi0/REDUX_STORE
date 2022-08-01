import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
//if we want to changing our store so despatch actions
import { remove } from '../store/cartSlice';

const Cart = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.cart)
    const handleRemove = (productId) => {
        dispatch(remove(productId))
    }
    return (
        <div>
            <h3>Cart</h3>
            <div className="cartWrapper">
                {
                    products.map(product => (
                        <div className="cartCard" key={product.id}>
                            <img src={product.image} alt="" />
                            <h5>{product.title}</h5>
                            <h4>{product.price}</h4>
                            <button className="btn" onClick={() => handleRemove(product.id)}>Remove</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cart