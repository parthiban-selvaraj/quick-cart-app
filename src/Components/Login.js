import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from './Context/Context';
import ButtonContainer from './Styles/ButtonContainer';
import ProfileWrapper from './Styles/ProfileWrapper';

const Login = () => {
  const valueFromContext = useContext(UserContext);
  return (
    <>
    <ProfileWrapper>
      <div className='text-title'>
        <h1 className='text-capitalize text-center mt-5'>Quick cart application</h1>
      </div>
      <div className="container mt-5 ms-auto me-auto card">
        <div className='row'>
          <div className='col-10 mx-auto col-md-6 justify-content-center mt-5'>
            <i className='fa-solid fa-cart-shopping fa-10x p-5 ms-5 me-5 center-block d-block mx-auto' 
            style={{color:"var(--mainBlue)"}}
            />
          </div>
          <div className='col-10 mx-auto col-md-6 my-3 text-capitalize text-center text-start' style={{ borderLeft: "solid 1px grey", paddingLeft: "1rem" }}>
            <h3 className='text-capitalize' >
              identify yourself
            </h3>
            {/* Email starts */}
            <div className="form-group form-row mt-4">
              <label className="col-lg-4">Email:</label>
              <input
                type="email"
                className="form-control"
                // value="{this.state.email}"
                placeholder='example@example.com'
                required
              // onChange={(event) => {
              //   this.setState({ email: event.target.value });
              // }}
              />
            </div>
            {/* Email ends */}
            {/* Password starts */}
            <div className="form-group form-row mt-4">
              <label className="col-lg-4">Password:</label>
              <input
                type="password"
                className="form-control"
                required
              // value={this.state.password}
              // onChange={(event) => {
              //   this.setState({ password: event.target.value });
              // }}
              />
            </div>
            {/* Password ends */}
            {/* <Link to={"/"}> */}
            <ButtonContainer className='mt-4' onClick={ ()=> valueFromContext.setLoginStatus('test@gmail.com')}>
              Login
            </ButtonContainer>
            {/* </Link> */}
            <div className='text-capitalize pt-2'>
                <p>don't have account yet?.click here to <Link to={"/register"}>register</Link></p>
            </div>
          </div>
        </div>
      </div>
    </ProfileWrapper>
    </>
  )
}

export default Login;