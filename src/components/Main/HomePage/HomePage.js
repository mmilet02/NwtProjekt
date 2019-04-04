import React, { Component } from "react";

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
        <div key={trip.trip_id}>
          <p>{trip.name}</p>
        </div>
      );
    });
    return (
      <div>
        <p>Home Page</p>
        <h1>TRIPS</h1>
        {trips}
      </div>
    );
  }
}

export default HomePage;
