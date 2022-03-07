import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from './Context/Context';
import ButtonContainer from './Styles/ButtonContainer';
import NavWrapper from './Styles/NavWrapper';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from '../Store/actions';

const Navbar = () => {
    const logged = useSelector(state => state.logged);
    const dispatch = useDispatch();
    const valueFromContext = useContext(UserContext);
    const value = true;
    const location = useLocation();
    console.log("user context val", valueFromContext)
    return (
        <>
            {
                (location.pathname === '/login' || 
                location.pathname === '/logout' || 
                location.pathname === '/register') ?  null :

                    <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-4'>
                        {value ?
                            <>
                                <Link to={'/about'} className='navbar-brand'><i className="fa-solid fa-house fa-1x"></i> Home</Link>
                                <ul className='navbar-nav align-items-center'>
                                    <li className='nav-item me-5'>
                                        <Link to={'/'} className='nav-link'>products</Link>
                                    </li>
                                </ul>
                                <div className='nav-item align-items-center ms-auto'>
                                    <p style={{ marginBottom: '0px', color: 'var(--mainWhite)', fontSize: "1.2rem" }} className="text-capitalize">hello, {valueFromContext.firstName}</p>
                                </div>

                                <Link to={'/cart'} className='ms-auto'>
                                    <ButtonContainer>
                                        <i className='fas fa-cart-plus' /> my cart
                                    </ButtonContainer>
                                </Link>

                                <Link to={'/user'} className='ms-2'>
                                    <ButtonContainer>
                                        <i className='fas fa-user' /> {valueFromContext.firstName ? valueFromContext.firstName : "profile"}
                                    </ButtonContainer>
                                </Link>

                                <Link to={'/logout'} className='ms-2'>
                                    <ButtonContainer onClick={() => dispatch(signIn())}>
                                        <i className="fa-solid fa-right-from-bracket" /> logout
                                    </ButtonContainer>
                                </Link>
                            </>
                            : null}

                    </NavWrapper> }
        </>
    )
}

export default Navbar;