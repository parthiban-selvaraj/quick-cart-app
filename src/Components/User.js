import React, { useContext } from 'react'
import { UserContext } from './Context/Context';

const User = () => {
  const valueFromContext = useContext(UserContext);
  return (
    <>
        <h1>User Details - {valueFromContext}</h1>
    </>
  )
}

export default User;