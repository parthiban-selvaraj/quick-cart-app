import React from 'react'
import { Link } from 'react-router-dom';
import ButtonContainer from '../Styles/ButtonContainer';

const EmptyCart = () => {
  return (
    <div className='container mt-5'>
        <div className='row'>
        <div className='col-10 mx-auto text-center text-title'>
            <h2>your cart is currently empty</h2>
            <Link to={"/"}>
                <ButtonContainer>
                    back to store
                </ButtonContainer>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default EmptyCart;