import React, { Component } from "react";
import "./TripCard.css";
import { Link } from "react-router-dom";

import axios from "axios";

export class TripCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  componentWillMount() {
    axios
      .get("/api/users/user/" + this.props.trip.UserId)
      .then(res => {
        console.log("user", res);
        this.setState({
          user: res.data.fullname
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.props);
    let trip = this.props.trip;
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
            <p>Created by: {this.state.user}</p>
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
  }
}

export default TripCard;
