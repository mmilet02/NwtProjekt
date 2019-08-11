import React, { Component } from "react";
import "./TripDetails.css";
import axios from "axios";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { fetchSingleTrip, deleteTrip } from "../../../actions/tripActions";

export class TripDetails extends Component {
  constructor(props) {
    super(props);
    this.deleteTrip = this.deleteTrip.bind(this);
  }

  componentWillMount() {
    this.props.fetchSingleTrip(this.props.match.params.id);
  }

  deleteTrip(event) {
    event.preventDefault();
    this.props.deleteTrip(this.props.trip.id);
  }
  editTrip(event) {
    event.preventDefault();
    axios
      .put("/edit/" + this.props.trip)
      .then(res => console.log("Result:", res))
      .catch(err =>
        console.log("ERROR:", err)
      ); /*
    this.props.history.push("/");
    */

    /*     window.location.reload();
     */
  }

  render() {
    return (
      <div className="tripDetailsContainer">
        <div className="detailsImg">
          <img src={"http://localhost:5000/" + this.props.trip.image} alt="" />
        </div>
        <div className="infoGlavni">
          <div className="faDiv">
            <i className="fas fa-map-marker-alt fa-2x" />
            <p>{this.props.trip.location}</p>
          </div>
          <div className="faDiv">
            <i className="fas fa-tag fa-2x" />
            <p>{this.props.trip.price} €</p>
          </div>
          <div className="faDiv">
            <i className="far fa-calendar-alt fa-2x" />
            <p>{this.props.trip.date}</p>
          </div>
          <div className="faDiv">
            <i className="fas fa-hourglass-start fa-2x" />
            <p>{this.props.trip.duration} days</p>
          </div>
          <div className="faDiv">
            <i className="fas fa-ticket-alt fa-2x" />
            <p>{this.props.trip.freeSpace}</p>
          </div>
          <div className="faDiv">
            <i className="fas fa-user-tie fa-2x" />
            <p>{this.props.trip.company}</p>
          </div>
        </div>
        <div className="tripDescription">
          <p>{this.props.trip.description}</p>
        </div>
        <button className="bookNow" onClick={this.deleteTrip}>
          Delete
        </button>
        <Link to={"/edit/" + this.props.trip.id}>
          <button className="bookNow">Edit</button>
        </Link>

        <button className="bookNow">BOOK NOW</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  trip: state.tripReducer.trip
});

export default connect(
  mapStateToProps,
  { fetchSingleTrip, deleteTrip }
)(TripDetails);
