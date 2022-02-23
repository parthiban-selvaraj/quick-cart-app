import React from 'react'
import { Link } from 'react-router-dom'
import ButtonContainer from '../Styles/ButtonContainer'

const Checkout = () => {
    return (
        <>
        <div className='mt-5 pt-5 text-muted lead' style={{ textAlign: "center" }}>
            <h2>Your order-<strong>QR4578</strong> successful!!!</h2>
            <h3>Thanks for shopping with us!</h3>
        </div>
            <div className='mt-5 pt-5' style={{ textAlign: "center" }}>
                <Link to={"/about"}>
                    <ButtonContainer>back to home</ButtonContainer>
                </Link>
            </div>
        </>
    )
}

export default Checkout