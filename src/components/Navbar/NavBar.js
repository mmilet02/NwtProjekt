import React, { Component } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
  }
  render() {
    return (
      <header className="header">
        <div>
          <Link to="/">Logo</Link>
        </div>
        <nav>
          <div className=" header mm">
            <Link to="/trips">Trips</Link>
          </div>
          {this.state.isLoggedIn ? (
            <div className="header m ">
              <div>
                <Link to="/profile">Profile</Link>
              </div>
              <div >Logout</div>
            </div>
          ) : (
              <div className="header m">
                <div>
                  <Link to="/login">Login</Link>
                </div>
                <div>
                  <Link to="/register">Register</Link>
                </div>
              </div>
            )}
        </nav>
      </header>
    );
  }
}

export default Navbar;
