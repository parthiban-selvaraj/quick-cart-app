import React, { useContext } from 'react'
import { UserContext } from './Context/Context';
import ProfileWrapper from './Styles/ProfileWrapper';

const User = () => {
  const valueFromContext = useContext(UserContext);
  return (
    <ProfileWrapper>
      <div className="container mt-5 ms-5 me-5">
        <div className='row'>
          <div className='text-start'>
            <i className='fas fa-user fa-5x' />
          </div>
          <div className='text-end'>
            <h1 className='text-capitalize'>
              {valueFromContext.user.firstName}, {valueFromContext.user.lastName}
            </h1>
            <p className="title">CEO and Founder, Example</p>
            <p>{valueFromContext.user.email}</p>
          </div>
        </div>
        {/* <img src="img.jpg" alt="John" style={{width:"100%"}} /> */}

        {/* <a href="#"><i class="fa fa-dribbble"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-linkedin"></i></a>
          <a href="#"><i class="fa fa-facebook"></i></a> */}
        {/* <p><button>Contact</button></p> */}
      </div>
    </ProfileWrapper>
  )
}

export default User;