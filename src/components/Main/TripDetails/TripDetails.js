import React, { Component } from "react";
import "./TripDetails.css";
export class TripDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trip: {}
    };
  }

  componentWillMount() {
    let trips = require("../../../trips.json");
    console.log(trips);
    this.setState({
      ...this.state,
      trip: trips.find(t => t.trip_id === +this.props.match.params.id)
    });
  }
  render() {
    console.log(this.state.trip);
    return (
      <div className="tripDetailsContainer">
        <div className="detailsImg">
          <img
            src={"http://localhost:3000/images/" + this.state.trip.image}
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default TripDetails;
