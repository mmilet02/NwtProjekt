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
    console.log("CGnsdnsdnsdn", this.props);
    const { user, isLoggedIn } = this.props;
    console.log("USERR", user);
    return (
      <header className="second_header">
        <div className="firstHeaderPart">
          <div>
            {isLoggedIn ? (
              <div className="ifLogin">
                <div>
                  <Link to="/favorite">
                    <i className="fas fa-heart fa-lg" />
                  </Link>
                </div>
                <div>
                  <Link to="/createTrip">
                    <i className="fas fa-plus fa-lg" />
                  </Link>
                </div>
                <Link to="/profile">Profile - {user.fullname}</Link>
                <div onClick={this.logout}>Logout</div>
              </div>
            ) : (
              <div className="ifLogin">
                <div>
                  <Link to="/login">Login</Link>
                </div>
                <div>
                  <Link to="/register">Register</Link>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="secondHeaderPart">
          <div className="logo">
            <Link to="/">
              <img src="http://localhost:3000/images/logo.png" alt="" />
            </Link>
          </div>
          <div className="tripss">
            <div className="h">
              <Link to="/trips">EXTREME</Link>
            </div>
            <div className="h">
              <Link to="/trips">EXPLORE</Link>
            </div>
            <div className="h">
              <Link to="/trips">RELAX</Link>
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
