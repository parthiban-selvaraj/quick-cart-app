import React from 'react'
import CartItem from './CartItem';

const CartList = ({ product }) => {
    const { cart } = product;
    return (
        <div className='container-fluid'>
            {
                cart.map(item => {
                   return <CartItem key={item.id} item={item} product={product} />
                })
            }
        </div>
    )
}

export default CartList;