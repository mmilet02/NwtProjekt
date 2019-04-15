import React, { Component } from "react";
import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>
          <h3>Logo</h3>
        </div>
        <div className="contact">
          <h3>Contact us</h3>
          <div className="icons">
            <i class="fas fa-phone"> </i>
            <span className="text">+385 98/601/661</span>
            <br />
            <i class="far fa-envelope" />
            <span className="text">mmtours@gmail.com</span>
            <br />
            <i class="fas fa-home"> </i>
            <span className="text">Kamen, Split</span>
          </div>
        </div>
        <div className="follow">
          <h3>Follow us</h3>
          <div className="icons">
            <i class="fab fa-twitter fa-2x" />
            <i class="fab fa-facebook-square fa-2x" />
            <i class="fab fa-instagram fa-2x" />
          </div>
        </div>
        <div className="certificate">
          <h3>Something?</h3>
          <div className="icons">
            {/*           <i class="fas fa-trophy fa-2x" />
             */}{" "}
            <i class="fab fa-tripadvisor fa-4x" />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
