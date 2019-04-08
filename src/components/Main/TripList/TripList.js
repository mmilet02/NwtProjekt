import React, { Component } from "react";
import "./TripList.css";

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
  }
  render() {
    console.log(this.state.trips);
    let trips = this.state.trips.map(trip => {
      return (
        <div key={trip.trip_id} className="trip">
          <p>{trip.name}</p>
          <div>
            <img
              className="tripImage"
              src={"http://localhost:3000/images/" + trip.image}
              alt=""
            />
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="filter">
          <h1>FILTER</h1>
        </div>
        <div className="trips_heading">
          {" "}
          <h1>HEADING</h1>
        </div>
        <div className="trips">{trips}</div>
      </div>
    );
  }
}

export default TripList;
