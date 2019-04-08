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
  render() {
    return (
      <div>
        <h1>LOG IN</h1>
        <h3>Dont have an account?</h3>
        <div>
          <Link to="/register">Sign up</Link>
        </div>
        <div className="homepage_container">
          <div className="header_container">
            {/*             <img src={home_img} alt="" />
             */}{" "}
          </div>
        </div>
        <div className="login_form">
          <form className="form">
            <label>
              Username
              <input
                type="text"
                placeholder="username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                placeholder="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
