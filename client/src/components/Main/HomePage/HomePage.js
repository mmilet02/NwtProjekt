import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import TripCard from "../TripCard/TripCard";
import { connect } from "react-redux";
import { fetchTrips } from "../../../actions/tripActions";

export class HomePage extends Component {
  componentDidMount() {
    this.props.fetchTrips();
  }
  render() {
    let sortedTrips = this.props.trips.sort((a, b) => {
      return b.likes.length - a.likes.length;
    });
    let trips = sortedTrips.map(trip => {
      console.log(this.props.user);
      return (
        <TripCard key={trip.id} trip={trip} user={this.props.user}></TripCard>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  trips: state.tripReducer.trips,
  user: state.userReducer.user
});

export default connect(
  mapStateToProps,
  {
    fetchTrips
  }
)(HomePage);
