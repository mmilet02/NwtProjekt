import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { userLogin } from "../../../../actions/userActions";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
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
    console.log("submitting");
    console.log(this.state);
    this.props.userLogin(this.state);
  }
  render() {
    return (
      <div className="login_page">
        <div className="login_form">
          <h1>Login form:</h1>
          <div className="form_wrapper">
            <form className="form" onSubmit={this.formSubmit}>
              <label>
                <input
                  className="userInput"
                  type="text"
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
                <input className="checkbox" type="checkbox" /> Remember me
              </label>
              <button className="login_button" onClick={this.formSubmit}>
                LOGIN
              </button>
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

export default connect(
  null,
  { userLogin }
)(Login);
