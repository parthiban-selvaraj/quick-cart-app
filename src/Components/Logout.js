import React from 'react'
import Login from './Login'

const Logout = () => {
    const login = {
        status : true
    }

    return (
        <>
            <h1>You are logged out. Click here to 
                <button onClick={() => !login.status}>
                sign in
                </button> 
            </h1>
            {/* add signin components */}
            { login.status && <Login />}
        </>
    )
}

export default Logout