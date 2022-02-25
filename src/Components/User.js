import React, { useContext } from 'react'
import { UserContext } from './Context/Context';
import ProfileWrapper from './Styles/ProfileWrapper';

const User = () => {
  const valueFromContext = useContext(UserContext);
  return (
    <ProfileWrapper>
      <div className="container mt-5 ms-auto me-auto card">
        <div className='row'>
          <div className='col-4 me-5 col-md-1 justify-content-center'>
            <i className='fas fa-user fa-5x ms-3 mt-5 align-items-center' />
          </div>
          <div className='col-10 me-auto col-md-6 my-3 text-capitalize text-start' style={{borderLeft: "solid 1px grey", paddingLeft:"1rem"}}>
            <h1 className='text-capitalize'>
              {valueFromContext.firstName}, {valueFromContext.lastName}
            </h1>
            <p className="title">CEO and Founder, Example</p>
            <p>{valueFromContext.email}</p>
            {valueFromContext.admin ? <p>Role: <i>Admin</i></p> : null }
          </div>
        </div>
        <div className='row text-capitalize' style={{borderTop: "solid 1px grey", paddingLeft:"1rem"}}>
          {/* <div className='col-10 ms-2 py-1 col-md-10 text-start justify-content-center text-capitalize'> */}
              <div className='mt-2'>
              <h3>summary</h3>
              <p className='text-muted lead'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis imperdiet quam, sit amet ultricies odio luctus rhoncus. Suspendisse sit amet tristique ligula. Fusce tincidunt, turpis quis aliquam egestas, risus dui condimentum eros, sit amet commodo dui diam ac mi. Donec lobortis rhoncus libero, non faucibus nibh egestas eget. Etiam porta est id enim consequat, in commodo enim facilisis. Duis bibendum non turpis eget fringilla. Phasellus a scelerisque nibh. Donec mauris risus, accumsan in lacinia vitae, pulvinar eu est. Donec dignissim nisl in magna posuere suscipit.</p>
              </div>
          {/* </div> */}
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