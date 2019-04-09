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
      <div className="register_page">
        <div className="login_form">
          <h1>Register form:</h1>
          <div className="form_wrapper">
            <form className="form">
              <label>
                <input
                  className="userInput"
                  type="text"
                  placeholder="Name"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <input
                  className="userInput"
                  type="text"
                  placeholder="Surname"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </label>
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
                <input
                  className="userInput"
                  type="password"
                  placeholder="Repeat password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <input className="checkbox" type="checkbox" /> I have read and
                accept the terms of use
              </label>
              <button className="login_button">REGISTER</button>
              <div className="signup">
                <Link to="/login" className="signup">
                  Already a member? Login !
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
