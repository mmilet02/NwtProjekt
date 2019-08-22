import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
/* import GoogleMap from "../../GoogleMap";
 */
export class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      trips: []
    };
  }
  componentDidMount() {
    let trips = require("../../../trips.json");
    console.log(trips);
    this.setState({
      ...this.state,
      trips: trips
    });
  }
  render() {
    console.log(this.state);
    let trips = this.state.trips.slice(0, 3).map(trip => {
      return (
        <div className="tripCard" id={"trip" + trip.trip_id} key={trip.trip_id}>
          <Link to={"/post/" + trip.trip_id}>
            <img
              className="tripImg"
              src={"http://localhost:3000/images/" + trip.image}
              alt=""
            />
            <div className="trophy">
              <img src="http://localhost:3000/images/best.png" alt="" />
            </div>
          </Link>
        </div>
      );
    });
    return (
      <div className="homepage_container">
        <div className="header_container">
          <img src="http://localhost:3000/images/home_background.jpg" alt="" />
        </div>
        <div className="heading">
          <p>
            ────────────────────────── MOST POPULAR ──────────────────────────
          </p>
        </div>
        <div className="bestTrips">{trips}</div>
        {/*         <GoogleMap />
         */}{" "}
      </div>
    );
  }
}

export default HomePage;
