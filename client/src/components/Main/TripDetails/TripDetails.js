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
        <div className="infoGlavni">
          <div className="faDiv">
            <i class="fas fa-map-marker-alt fa-2x" />
            <p>{this.state.trip.location}</p>
          </div>
          <div className="faDiv">
            <i class="fas fa-tag fa-2x" />
            <p>{this.state.trip.price} €</p>
          </div>
          <div className="faDiv">
            <i class="far fa-calendar-alt fa-2x" />
            <p>{this.state.trip.date}</p>
          </div>
          <div className="faDiv">
            <i class="fas fa-hourglass-start fa-2x" />
            <p>{this.state.trip.duration} days</p>
          </div>
          <div className="faDiv">
            <i class="fas fa-ticket-alt fa-2x" />
            <p>{this.state.trip.freeSpace}</p>
          </div>
          <div className="faDiv">
            <i class="fas fa-user-tie fa-2x" />
            <p>{this.state.trip.company}</p>
          </div>
        </div>
        <div className="tripDescription">
          <p>{this.state.trip.description}</p>
        </div>
        <button className="bookNow">BOOK NOW</button>
      </div>
    );
  }
}

export default TripDetails;
