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
      <header className="second_header">
        <div className="firstHeaderPart">
          {this.state.isLoggedIn ? (
            <div className="ifLogin">
              <div>
                <Link to="/favorite">
                  <i className="fas fa-heart fa-lg" />
                </Link>
              </div>
              <div>
                <Link to="/profile">
                  <i className="fas fa-plus fa-lg" />
                </Link>
              </div>
              <div>
                <Link to="/profile">Profile</Link>
              </div>
              <div>Logout</div>
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

        {/* <div className="secondHeaderPart">
          <Link to="/">MM ~ TOURS</Link>
        </div>

        <div className="thirdHeaderPart">
          <div className="partOfThirdHeaderPart">
            <div className="h">
              <Link to="/trips">JEDNODNEVNI</Link>
            </div>
            <div className="h">
              <Link to="/trips">VIŠEDNEVNI</Link>
            </div>
            <div className="h">
              <Link to="/trips">EXTREME</Link>
            </div>
            <div className="h">
              <Link to="/trips">ZA DJECU</Link>
            </div>
            <div className="h">
              <Link to="/trips">ZA PAROVE</Link>
            </div>
            <div className="h">
              <Link to="/trips">MARIO</Link>
            </div>
          </div>

        </div> */}

        {/* <div>
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
        </nav> */}
      </header>
    );
  }
}

export default Navbar;
