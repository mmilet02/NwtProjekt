import React, { Component } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { fetchUser } from "../../../actions/userActions";
import { fetchTrips } from "../../../actions/tripActions";
import TripCard from "../TripCard/TripCard.js";

export class Profile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.trips.length === 0) {
      this.props.fetchTrips();
    }
  }
  render() {
    let trips = [];
    let fullname = "";
    let email = "";
    if (this.props.isLoggedIn) {
      trips = this.props.trips
        .filter(trip => {
          return trip.UserId === this.props.user.id;
        })
        .map(trip => {
          return (
            <TripCard
              key={trip.id}
              trip={trip}
              user={this.props.user}
            ></TripCard>
          );
        });

      trips.push(
        <div className="tripp" id="addCard">
          <Link className="addCard" to="/createTrip">
            <h4>Create another trip!</h4>
            <i class="fas fa-plus fa-2x" />
          </Link>
        </div>
      );
      if (!!this.props.user) {
        fullname = this.props.user.fullname;
        email = this.props.user.email;
      }
    }
    return (
      <div className="profilContainer">
        <div className="profilInfo">
          <div className="profilImg">
            <div className="profilImg1">
              <img
                src="http://localhost:3000/images/placeimg_640_480_any.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="profilInfo1">
            <p>
              <b>Name</b>: {fullname}
            </p>
            <p>
              <b>Contact</b>: {email}
            </p>
          </div>
        </div>
        <div className="myTrips">
          <div className="myTripsHeading">
            <p>MY TRIPS</p>
          </div>
          <div className="tripList">{trips}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  trips: state.tripReducer.trips,
  isLoggedIn: state.userReducer.isLoggedIn,
  user: state.userReducer.user
});

export default connect(
  mapStateToProps,
  { fetchUser, fetchTrips }
)(Profile);
