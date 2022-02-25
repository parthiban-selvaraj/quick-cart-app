import React from 'react'
import { Link } from 'react-router-dom'
import ButtonContainer from './Styles/ButtonContainer'
import ProfileWrapper from './Styles/ProfileWrapper'

const Register = () => {
  return (
    <ProfileWrapper>
      <div className='text-title'>
        <h1 className='text-capitalize text-center mt-4'>Quick cart application</h1>
      </div>
      <div className="container ms-auto me-auto card mt-4">
        <div className='row'>
          <div className='col-10 mx-auto col-md-6'>
            <i className='fa-solid fa-cart-shopping fa-10x p-5 ms-5 me-5 center-block d-block' />
          </div>
          <div className='col-10 mx-auto col-md-6 my-3 text-capitalize text-center text-start' style={{ borderLeft: "solid 1px grey", paddingLeft: "1rem" }}>
            <h3 className='text-capitalize'>
              provide your details
            </h3>
            {/* First starts */}
            <div className="form-group form-row mt-4">
              <label className="col-lg-4">First Name:</label>
              <input
                type="text"
                className="form-control"
                // value="{this.state.email}"
                placeholder='parthiban'
              // onChange={(event) => {
              //   this.setState({ email: event.target.value });
              // }}
              />
            </div>
            {/* First Name ends */}
            {/* Second starts */}
            <div className="form-group form-row mt-4">
              <label className="col-lg-4">Second Name:</label>
              <input
                type="text"
                className="form-control"
                // value="{this.state.email}"
                placeholder='selvaraj'
              // onChange={(event) => {
              //   this.setState({ email: event.target.value });
              // }}
              />
            </div>
            {/* Second Name ends */}
            {/* Email starts */}
            <div className="form-group form-row mt-4">
              <label className="col-lg-4">Email:</label>
              <input
                type="email"
                className="form-control"
                // value="{this.state.email}"
                placeholder='example@example.com'
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
              // value={this.state.password}
              // onChange={(event) => {
              //   this.setState({ password: event.target.value });
              // }}
              />
            </div>
            {/* Password ends */}
            <Link to={"/"}>
            <ButtonContainer className='mt-4'>
              register
            </ButtonContainer>
            </Link>
            <div className='text-capitalize pt-2'>
                <p>already have account?.click here to <Link to={"/login"}>login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </ProfileWrapper>
  )
}

export default Register