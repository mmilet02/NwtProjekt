import React, { Component } from "react";
import "./TripDetails.css";
import axios from "axios";
import { Link } from "react-router-dom";

export class TripDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trip: {}
    };
    this.deleteTrip = this.deleteTrip.bind(this);
  }

  componentWillMount() {
    axios
      .get("/api/trips/show/" + this.props.match.params.id)
      .then(res => {
        this.setState({
          ...this.state,
          trip: res.data
        });
      })
      .catch(err => console.log("Ups, something went wrong", err));
  }

  deleteTrip(event) {
    event.preventDefault();
    axios
      .delete("/api/trips/delete/" + this.state.trip.id)
      .then(res => {
        console.log("Result:", res);
        /*         this.props.history.replace("/trips");
         */
        /*         window.location("/trips");
         */ this.props.history.push("/trips");
      })
      .catch(err => console.log("ERROR:", err));
  }
  editTrip(event) {
    event.preventDefault();
    axios
      .put("/edit/" + this.state.trip)
      .then(res => console.log("Result:", res))
      .catch(err => console.log("ERROR:", err));

    window.location.reload();
    /*
    this.props.history.push("/");
    */
  }

  render() {
    console.log(this.state.trip);
    return (
      <div className="tripDetailsContainer">
        <div className="detailsImg">
          <img src={"http://localhost:5000/" + this.state.trip.image} alt="" />
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
        <button className="bookNow" onClick={this.deleteTrip}>
          Delete
        </button>
        <Link to={"/edit/" + this.state.trip.id}>
          <button className="bookNow">Edit</button>
        </Link>

        <button className="bookNow">BOOK NOW</button>
      </div>
    );
  }
}

export default TripDetails;
