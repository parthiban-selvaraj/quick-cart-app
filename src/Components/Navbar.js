import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from './Context/Context';
import ButtonContainer from './Styles/ButtonContainer';
import NavWrapper from './Styles/NavWrapper';

const Navbar = () => {
    const value = true;
    const valueFromContext = useContext(UserContext)
    return (
        
        <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-4'>
            { value ?
            <>
            <Link to={'/about'} className='navbar-brand'><i className="fa-solid fa-house fa-1x"></i> Home</Link>
            <ul className='navbar-nav align-items-center'>
                <li className='nav-item me-5'>
                    <Link to={'/'} className='nav-link'>products</Link>
                </li>
            </ul>
            <div className='nav-item align-items-center ms-auto'>
                <p style={{marginBottom: '0px', color:'var(--mainWhite)', fontSize:"1.2rem"}} className="text-capitalize">hello, {valueFromContext.user.firstName}</p>
            </div>

            <Link to={'/cart'} className='ms-auto'>
                <ButtonContainer>
                    <i className='fas fa-cart-plus' /> my cart
                </ButtonContainer>
            </Link>

            <Link to={'/user'} className='ms-2'>
                <ButtonContainer>
                    <i className='fas fa-user' /> profile
                </ButtonContainer>
            </Link>

            <Link to={'/logout'} className='ms-2'>
                <ButtonContainer>
                    <i className="fa-solid fa-right-from-bracket" /> logout
                </ButtonContainer>
            </Link>
            </>
            : null }
            
        </NavWrapper>
    )
}

export default Navbar;