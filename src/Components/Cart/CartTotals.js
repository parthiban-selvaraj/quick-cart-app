import React from 'react'
import { Link } from 'react-router-dom';

const CartTotals = ({ product }) => {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = product
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mt-2 ms-sm-5 ms-md-auto col-sm-8 text-capitalize text-end'>
            <Link to={"/"}>
              <button
                className='btn btn-outline-danger text-uppercase mb-3 px-5'
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className='text-title'>
                subtotal : </span>
              <strong>₹ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className='text-title'>
                tax : </span>
              <strong>₹ {cartTax}</strong>
            </h5>
            <h5>
              <span className='text-title'>
                total : </span>
              <strong>₹ {cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartTotals;