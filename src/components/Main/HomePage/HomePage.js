import React, { Component } from "react";
import "./HomePage.css";
import Slideshow from "../Slider/Slideshow.js"

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
    let trips = this.state.trips.map(trip => {
      return (
        <div id={"trip" + trip.trip_id} key={trip.trip_id}>
          <img
            className="tripImg"
            src={"http://localhost:3000/images/" + trip.image}
            alt=""
          />
        </div>
      );
    });
    return (
      <div className="homepage_container">
        <div className="header_container">
          <img src="http://localhost:3000/images/home_background.jpg" alt="" />
        </div>

        <div className="about_me">
          <h1>ABOUT</h1>
        </div>

        <div className="ponude">
          <Slideshow />
        </div>


        <div className="topTrips">
          <div className="topTrips_heading">
            <h1>TOP TRIPS</h1>
          </div>
          <div className="topTrips_img">
            {trips}
          </div>
        </div>


        <div className="info">
          <h1>CONTACT</h1>
        </div>
      </div >
    );
  }
}

export default HomePage;
