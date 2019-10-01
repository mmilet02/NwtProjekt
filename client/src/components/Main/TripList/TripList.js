import React, { Component } from "react";
import "./TripList.css";
import CreateTrip from "../CreateTrip/CreateTrip";

import { connect } from "react-redux";
import { fetchTrips } from "../../../actions/tripActions";

import TripCard from "../TripCard/TripCard";

export class TripList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      searchTerm: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchTrips();
    window.scrollTo(0, 0);
  }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  }

  render() {
    /* let SortedTrips = this.props.trips.sort((a, b) => {
      console.log(a);
      return a.name.toUpperCase() < b.name.toUpperCase();
    }); */
    let trips = this.props.trips
      .filter(trip => {
        if (
          trip.name.toUpperCase().includes(this.state.searchTerm.toUpperCase())
        ) {
          return true;
        } else {
          return false;
        }
      })
      .map(trip => {
        return (
          <TripCard key={trip.id} trip={trip} user={this.props.user}></TripCard>
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
          {/*           <p> TRIPS </p>
           */}{" "}
          <label className="searchV">
            <input
              name="searchTerm"
              placeholder="Search Trips by Destination"
              value={this.state.searchTerm}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <hr />
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
  trips: state.tripReducer.trips,
  user: state.userReducer.user
});

export default connect(
  mapStateToProps,
  {
    fetchTrips
  }
)(TripList);
