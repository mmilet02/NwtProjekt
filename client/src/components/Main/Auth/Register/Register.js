import React, { Component } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { userRegister } from "../../../../actions/userActions";

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      fullname: "",
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }
  handleChange(e) {
    const { value, name } = e.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  }

  formSubmit(e) {
    e.preventDefault();
    console.log("submitting register");
    console.log(this.state);
    this.props.userRegister(this.state);
  }

  render() {
    return (
      <div className="register_page">
        <div className="login_form">
          <h1>Register form:</h1>
          <div className="form_wrapper">
            <form className="form" onSubmit={this.formSubmit}>
              <label>
                <input
                  className="userInput"
                  type="text"
                  placeholder="Fullname"
                  name="fullname"
                  value={this.state.fullname}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <input
                  className="userInput"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={this.state.email}
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
                <input className="checkbox" type="checkbox" /> I have read and
                accept the terms of use
              </label>
              <button className="login_button" onClick={this.formSubmit}>
                REGISTER
              </button>
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

export default connect(
  null,
  { userRegister }
)(Register);
