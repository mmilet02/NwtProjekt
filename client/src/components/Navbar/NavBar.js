import React, { Component } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

import { userLogout } from "../../actions/userActions";
import { connect } from "react-redux";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.userLogout();
  }

  render() {
    const { user, isLoggedIn } = this.props;
    return (
      <header className="second_header">
        <div className="secondHeaderPart">
          <div className="logo">
            <Link to="/">
              <img src="http://localhost:3000/images/logo.png" alt="" />
            </Link>
          </div>
          <div className="tripss">
            <div className="h1">
              <Link to="/trips">TRIPS</Link>
            </div>
            <div className="h1">
              <div>
                {isLoggedIn ? (
                  <div className="ifLogin">
                    <div className="h2">
                      <Link to="/profile">{user.fullname}</Link>
                    </div>
                    <div className="logout" onClick={this.logout}>
                      Logout
                    </div>
                  </div>
                ) : (
                  <div className="ifLogin">
                    <div className="h2">
                      <Link to="/login">LOGIN</Link>
                    </div>
                    <div className="h2">
                      <Link to="/register">REGISTER</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
const mapStateToProps = state => ({
  user: state.userReducer.user,
  isLoggedIn: state.userReducer.isLoggedIn
});

export default connect(
  mapStateToProps,
  { userLogout }
)(Navbar);
