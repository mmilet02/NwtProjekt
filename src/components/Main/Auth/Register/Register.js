import React, { Component } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
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
        <h1>REGISTER</h1>
        <h3>Alredy have an account?</h3>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div className="register_form">
          <form className="register_form">
            <label>
              Email
              <input
                type="email"
                placeholder="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
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

export default Register;
