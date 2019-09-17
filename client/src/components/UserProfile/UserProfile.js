import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/userActions";
import { fetchUserTrips } from "../../actions/tripActions";
import { Redirect } from "react-router-dom";
import { TripCard } from "../Main/TripCard/TripCard";

class UserProfile extends Component {
  /*  state = {
    loading: true
  }; */
  componentWillMount() {}

  componentDidMount() {
    const userID = this.props.match.params.id;
    this.props.fetchUser(userID);
    this.props.fetchUserTrips(userID);
    if (!this.props.isLoggedIn) {
      return <Redirect to="/login" />;
    }
  }

  render() {
    console.log("props inc", this.props);
    /*  if (!this.props.isLoggedIn) {
      return <Redirect to="/login" />;
    } */
    if (
      this.props.isLoggedIn &&
      this.props.user.id === +this.props.match.params.id
    ) {
      return <Redirect to="/profile" />;
    }
    let userTrips = this.props.userTrips.map(trip => {
      return <TripCard key={trip.id} trip={trip}></TripCard>;
    });
    return (
      <div class="userProfile">
        <div>
          {this.props.fetchedUser ? (
            <div>
              <h1>{this.props.fetchedUser.fullname} </h1>
              <h3>Contact: {this.props.fetchedUser.email}</h3>
              <h4>Member Since {this.props.fetchedUser.createdAt}</h4>
            </div>
          ) : null}
        </div>
        <div className="tripsContainer">
          {!!this.props.userTrips[0] ? (
            <div className="trips">{userTrips}</div>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn,
  user: state.userReducer.user,
  userTrips: state.tripReducer.userTrips,
  fetchedUser: state.userReducer.fetchedUser
});

export default connect(
  mapStateToProps,
  { fetchUser, fetchUserTrips }
)(UserProfile);
