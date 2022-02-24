import React, { useEffect } from 'react'
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
      <div className='text-capitalize mt-10 mx-auto pt-5 text-center'>
        <h3>You are logged out. Click here to <Link to={"/login"}>
           login
        </Link></h3>
        </div>
      {/* add signin components */}
      {/* {console.log('login value', login.status)}
            { login.status && <Login />} */}
    </>
  )
}

export default Logout