import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser, clearUser } from "../../actions/userActions";
import { fetchTrips } from "../../actions/tripActions";
import { Redirect } from "react-router-dom";
import { TripCard } from "../Main/TripCard/TripCard";

class UserProfile extends Component {
  /*  state = {
    loading: true
  }; */
  componentWillMount() {}

  componentDidMount() {
    window.scrollTo(0, 0);
    const userID = this.props.match.params.id;
    this.props.fetchUser(userID);
    if (!this.props.isLoggedIn) {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: this.props.location }
          }}
        />
      );
    }
    if (this.props.trips.length < 1) {
      this.props.fetchTrips();
    }
  }

  componentWillUnmount() {
    this.props.clearUser();
  }
  render() {
    if (!this.props.isLoggedIn) {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: this.props.location }
          }}
        />
      );
    }
    if (
      this.props.isLoggedIn &&
      this.props.user.id === +this.props.match.params.id
    ) {
      return (
        <Redirect
          to={{
            pathname: "/profile",
            state: { from: this.props.location }
          }}
        />
      );
    }
    let trips = [];
    if (this.props.isLoggedIn) {
      trips = this.props.trips
        .filter(trip => {
          return trip.UserId === +this.props.match.params.id;
        })
        .map(trip => {
          return (
            <TripCard
              key={trip.id}
              trip={trip}
              user={this.props.user}
              isLoggedIn={this.props.isLoggedIn}
            ></TripCard>
          );
        });
      console.log(this.props.fetchedUser);
    }
    return (
      <div class="userProfile">
        <div>
          {this.props.fetchedUser ? (
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
                  <b>Name</b>: {this.props.fetchedUser.fullname}
                </p>
                <p>
                  <b>Contact</b>: {this.props.fetchedUser.email}
                </p>
              </div>
            </div>
          ) : null}
        </div>
        <div className="myTripsHeading">
          <p>{this.props.fetchedUser.fullname} TRIPS</p>
        </div>
        <div className="tripsContainer">
          {trips[0] ? <div className="trips">{trips}</div> : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn,
  user: state.userReducer.user,
  fetchedUser: state.userReducer.fetchedUser,
  trips: state.tripReducer.trips
});

export default connect(
  mapStateToProps,
  { fetchUser, clearUser, fetchTrips }
)(UserProfile);
