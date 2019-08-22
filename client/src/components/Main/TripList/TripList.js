import React, { Component } from "react";
import "./TripList.css";
import { Link } from "react-router-dom";
import CreateTrip from "../CreateTrip/CreateTrip";

import { connect } from "react-redux";
import { fetchTrips } from "../../../actions/tripActions";

export class TripList extends Component {
  componentWillMount() {
    this.props.fetchTrips();
  }
  render() {
    console.log(this.props.trips);
    let trips = this.props.trips.map(trip => {
      return (
        <div key={trip.id} className="tripp">
          <div className="tripImage">
            <Link to={"/trip/" + trip.id}>
              <img
                className="trippImage"
                src={"http://localhost:5000/" + trip.image}
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
              <Link to={"/trip/" + trip.id}>
                <div className="buttonDetails">
                  <p>More details</p>
                </div>
              </Link>
            </div>
            <div className="infoFav">
              <i className="fas fa-heart fa-lg" />
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
