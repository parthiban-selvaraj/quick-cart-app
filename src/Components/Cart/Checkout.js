import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/Context'
import ButtonContainer from '../Styles/ButtonContainer'

const Checkout = () => {
    const valueFromContext = useContext(UserContext)
    return (
        <>
        <div className='mt-5 pt-5 text-muted lead text-capitalize' style={{ textAlign: "center" }}>
            <h2>{valueFromContext.firstName}, Your order-<strong><button style={{border: "0", borderBottom: "solid 1px var(--mainBlue)", background: "transparent"}}>QR4578</button></strong> successful!!!</h2>
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