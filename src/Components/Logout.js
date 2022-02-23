import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
// import Login from './Login'
import ButtonContainer from './Styles/ButtonContainer'

const Logout = () => {
    // const login = {
    //     status : false
    // }

    // useEffect((setLogin) => {
    //     setLogin = () => {
    //         login.status = true;
    //         console.log('inside login value', login.status)
    //     }
    // }, [login])
    
    
    return (
        <>
            <h1>You are logged out. Click here to </h1>
            <Link to={"/"}>
                <ButtonContainer >
                  login
                </ButtonContainer>
              </Link>
            {/* add signin components */}
            {/* {console.log('login value', login.status)}
            { login.status && <Login />} */}
        </>
    )
}

export default Logout