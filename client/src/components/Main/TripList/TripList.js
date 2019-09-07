import React, { Component } from "react";
import "./TripList.css";
import { Link } from "react-router-dom";
import CreateTrip from "../CreateTrip/CreateTrip";

import { connect } from "react-redux";
import { fetchTrips } from "../../../actions/tripActions";

import TripCard from "../TripCard/TripCard";

export class TripList extends Component {
  constructor() {
    super();
    this.state = {
      user: ""
    };
  }
  componentWillMount() {
    this.props.fetchTrips();
    window.scrollTo(0, 0);
  }

  render() {
    console.log(this.props.trips);
    let trips = this.props.trips.map(trip => {
      return <TripCard key={trip.id} trip={trip}></TripCard>;
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
          {!!this.props.trips[0] ? (
            <div className="trips">{trips}</div>
          ) : (
            <div>
              <h2>NO AVAILABLE TRIPS, CREATE ONE</h2>
              <CreateTrip />
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  trips: state.tripReducer.trips
});

export default connect(
  mapStateToProps,
  {
    fetchTrips
  }
)(TripList);
