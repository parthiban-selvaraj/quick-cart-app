import React from 'react'
import { Link } from 'react-router-dom';
import ButtonContainer from './Styles/ButtonContainer';

const Login = () => {
  const loginStat = true
  return (
    <>
        <div>
        <h4 className="m-1 p-2 border-bottom">Login</h4>

        {/* Email starts */}
        <div className="form-group form-row">
          <label className="col-lg-4">Email:</label>
          <input
            type="text"
            className="form-control"
            // value={email}
            // onChange={(event) => {
            //   this.setState({ email: event.target.value });
            // }}
          />
        </div>
        {/* Email ends */}

        {/* Password starts */}
        <div className="form-group form-row">
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

        <div className="text-right">
          {/* {this.state.message}   onClick={this.onLoginClick}*/}

          <button className="btn btn-primary m-1" >
            Login
          </button>
          <Link to={"/"}>
                <ButtonContainer >
                  login
                </ButtonContainer>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Login;