import React, { Component } from "react";
import "./HomePage.css";
import home_img from "../../../images/header_background.jpg";
import transfer from "../../../images/transfer.jpg";

export class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      trips: []
    };
  }
  componentWillMount() {
    let trips = require("../../../trips.json");
    console.log(trips);
    this.setState({
      ...this.state,
      trips: trips
    });
  }
  render() {
    console.log(this.state);
    // let trips = this.state.trips.map(trip => {
    //   return (
    //     <div key={trip.trip_id}>
    //       <p>{trip.name}</p>
    //     </div>
    //   );
    // });
    return (
      <div className="homepage_container">
        <div className="header_container">
          <img src={home_img} alt="" />
        </div>
        <div>
          <div className="heading">
            {" "}
            <h1>WELCOME / U PONUDI</h1>
          </div>
          <div className="img_container">
            <div className="pic">
              <img src={transfer} alt="" />
            </div>
            <div className="pic">
              <img src={transfer} alt="" />
            </div>
            <div className="pic">
              <img src={transfer} alt="" />
            </div>
            <div className="pic">
              <img src={transfer} alt="" />
            </div>
            <div className="pic">
              <img src={transfer} alt="" />
            </div>
            <div className="pic">
              <img src={transfer} alt="" />
            </div>
            <div className="pic">
              <img src={transfer} alt="" />
            </div>
          </div>
        </div>
        <div className="about_me">
          <h1>ABOUT</h1>
        </div>
        <div className="info">
          <h1>CONTACT</h1>
        </div>
      </div>
    );
  }
}

export default HomePage;
