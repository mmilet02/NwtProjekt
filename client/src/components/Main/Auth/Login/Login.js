import React, { Component } from "react";
import "./Login.css";
import { Link, withRouter, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { userLogin, clearningErrors } from "../../../../actions/userActions";

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
        emailError: "Email must include @",
        loading: false
      });
      return false;
    } else if (this.state.password.length < 5) {
      this.setState({
        ...this.state,
        emailError: "",
        passwordError: "Password needs to be atleast 6 characters long",
        loading: false
      });
      return false;
    }
    return true;
  }
  componentDidMount() {
    this.props.clearningErrors();
  }

  formSubmit(e) {
    e.preventDefault();
    console.log("submitting");
    console.log(this.state);
    this.setState({
      ...this.state,
      loading: true,
      emailError: "",
      passwordError: ""
    });
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      console.log("form submited");
      this.props.userLogin(this.state);
      this.setState({
        ...this.state,
        loading: false
      });
      console.log(this.props.history);
      /*       this.props.history.push("/profile");
       */
    }
  }
  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/profile" />;
    }
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
              {this.props.errorMsg ? <p>{this.props.errorMsg}</p> : null}
              {this.state.loading ? <div>Spinner</div> : null}
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

const mapStateToProps = state => ({
  errorMsg: state.userReducer.errorMsg,
  isLoggedIn: state.userReducer.isLoggedIn
});

export default connect(
  mapStateToProps,
  { userLogin, clearningErrors }
)(withRouter(Login));
