import React, { Component } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import CreateTrip from "../CreateTrip/CreateTrip";

export class Profile extends Component {
  constructor() {
    super();
    this.state = {
      trips: [],
      isVisible1: false,
      isVisible2: false,
      isVisible3: false
    };
  }
  componentDidMount() {
    let trips = require("../../../trips.json");
    console.log(trips);
    this.setState({
      ...this.state,
      trips: trips
    });
  }

  toggleDropdown1 = () =>
    this.setState({
      ...this.state,
      isVisible1: !this.state.isVisible1,
      isVisible2: false,
      isVisible3: false
    });

  toggleDropdown2 = () =>
    this.setState({
      ...this.state,
      isVisible2: !this.state.isVisible2,
      isVisible1: false,
      isVisible3: false
    });

  toggleDropdown3 = () =>
    this.setState({
      ...this.state,
      isVisible3: !this.state.isVisible3,
      isVisible2: false,
      isVisible1: false
    });

  render() {
    let trips = this.state.trips.map(trip => {
      return (
        <div key={trip.trip_id} className="tripp">
          <div className="tripImage">
            <Link to={"/post/" + trip.trip_id}>
              <img
                className="trippImage"
                src={"http://localhost:3000/images/" + trip.image}
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
              <Link to={"/post/" + trip.trip_id}>
                <div className="buttonDetails">
                  <p>More details</p>
                </div>
              </Link>
            </div>
            <div className="infoFav">
              <i class="fas fa-heart fa-lg" />
            </div>
          </div>
        </div>
      );
    });
    let trips2 = this.state.trips.map(trip => {
      return (
        <div key={trip.trip_id} className="tripp">
          <div className="tripImage">
            <Link to={"/post/" + trip.trip_id}>
              <img
                className="trippImage"
                src={"http://localhost:3000/images/" + trip.image}
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
              <Link to={"/post/" + trip.trip_id}>
                <div className="buttonDetails">
                  <p>More details</p>
                </div>
              </Link>
            </div>
            <div className="infoFav">
              <i class="fas fa-heart fa-lg" />
            </div>
          </div>
        </div>
      );
    });
    trips.push(
      <div onClick={this.toggleDropdown3} className="tripp" id="addCard">
        <i class="fas fa-plus fa-2x" />
      </div>
    );

    let option;
    if (this.state.isVisible1) {
      option = <div className="myTripsTrips">{trips}</div>;
    } else if (this.state.isVisible2) {
      option = <div className="myTripsTrips">{trips2}</div>;
    } else if (this.state.isVisible3) {
      option = <CreateTrip />;
    }
    return (
      <div className="profilContainer">
        <div className="profilInfo">
          <div className="profilImg">
            <div className="profilImg1">
              <img src="http://localhost:3000/images/profil.png" alt="" />
            </div>
          </div>
          <div className="profilInfo1">
            <p>
              <b>Ime</b> : Mario Mileta
            </p>
            <p>
              <b>Spol</b>: M
            </p>
            <p>
              <b>Dob</b>: 30 godina
            </p>
            <p>
              <b>Zanimanje</b>: klaun
            </p>
            <p>
              <b>Firma</b> : LadiJaja d.o.o.
            </p>
          </div>
        </div>
        {/* <div className="myTrips">
          <div className="myTripsHeading">
            <p>
              ────────────────────────── MY TRIPS ──────────────────────────
            </p>
          </div>
          
        </div> */}

        <div className="dropdown_container">
          <div className="myTripsHeading">
            <div onClick={this.toggleDropdown1}>
              MY TRIPS
              <i class="fas fa-chevron-down" />
            </div>
            <div onClick={this.toggleDropdown2}>
              MY FAVORITE
              <i class="fas fa-chevron-down" />
            </div>
            <div onClick={this.toggleDropdown3}>
              CREATE YOUR TRIP
              <i class="fas fa-chevron-down" />
            </div>
          </div>
          <div className="optionDiv"> {option}</div>
        </div>
      </div>
    );
  }
}

export default Profile;
