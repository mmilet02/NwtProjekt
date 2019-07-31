import React, { Component } from "react";
import "./TripList.css";
import { Link } from "react-router-dom";
import axios from "axios";

export class TripList extends Component {
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

    axios
      .get("/api/trips")
      .then(res => console.log("Success", res))
      .catch(err => console.log("Error", err));
  }
  render() {
    console.log(this.state.trips);
    let trips = this.state.trips.map(trip => {
      return (
        <div key={trip.trip_id} className="tripp">
          <div className="tripImage">
            <Link to={"/post/" + trip.trip_id}>
              <img
                className="trippImage"
                src={"http://localhost:3000/images/" + trip.image}
                alt=""
              />
            </Link>
          </div>
          <div className="info">
            <div className="info1">
              <p className="location">{trip.location}</p>
              <p>Start : {trip.date}</p>
              <p>Price : {trip.price} €</p>
              <p>Tickets left : {trip.freeSpace}</p>
              <p>Duration : {trip.duration} days</p>
              <Link to={"/post/" + trip.trip_id}>
                <div className="buttonDetails">
                  <p>More details</p>
                </div>
              </Link>
            </div>
            <div className="infoFav">
              <i class="fas fa-heart fa-lg" />
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="filter">
          <img
            className="triplistimg"
            src="http://localhost:3000/images/rafting.jpg"
            alt=""
          />
        </div>
        <div className="trips_heading">
          <p>────────────────────────── TRIPS ──────────────────────────</p>
        </div>
        <div className="tripsContainer">
          <div className="trips">{trips}</div>
        </div>
      </div>
    );
  }
}

export default TripList;
