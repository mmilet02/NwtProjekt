import React, { Component } from "react";
import home_img from "../../../../images/header_background.jpg";
import "./Login.css";

export class Login extends Component {
  render() {
    return (
      <div>
        <div className="homepage_container">
          <div className="header_container"><img src={home_img} alt="" /></div>
        </div>
        <div className="login_form">
          <p>Login in...</p>
        </div>
      </div>
    );
  }
}

export default Login;
