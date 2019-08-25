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
      password: "",
      emailError: "",
      passwordError: ""
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

  validate() {
    if (!this.state.email.includes("@")) {
      this.setState({
        ...this.state,
        emailError: "Email must include @"
      });
      return false;
    } else if (this.state.password.length < 5) {
      this.setState({
        ...this.state,
        emailError: "",
        passwordError: "Password needs to be atleast 6 characters long"
      });
      return false;
    }
    return true;
  }
  componentDidMount() {
    console.log("CLEARNING ERORRS HEHE");
  }

  formSubmit(e) {
    e.preventDefault();
    console.log("submitting");
    console.log(this.state);
    this.setState({
      ...this.state,
      emailError: "",
      passwordError: ""
    });
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      console.log("form submited");
      this.props.userLogin(this.state);
    }
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
              {this.state.emailError ? <p>{this.state.emailError}</p> : null}
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
              {this.state.passwordError ? (
                <p>{this.state.passwordError}</p>
              ) : null}

              {/*   <label>
                <input className="checkbox" type="checkbox" /> Remember me
              </label> */}
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
