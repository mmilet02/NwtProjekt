import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  }
  /*  <div>
          <Link to="/register">Sign up</Link>
        </div> */
  render() {
    return (
      <div className="login_page">
        <div className="login_form">
          <h1>Login form:</h1>
          <div className="form_wrapper">
            <form className="form">
              <label>
                <input
                  className="userInput"
                  type="text"
                  placeholder="Enter your email"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <input
                  className="userInput"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <input className="checkbox" type="checkbox" /> Remember me
              </label>
              <button className="login_button">LOGIN</button>
              <div className="signup">
                <Link to="/register" className="signup">
                  Dont have an account? Sign up !
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
