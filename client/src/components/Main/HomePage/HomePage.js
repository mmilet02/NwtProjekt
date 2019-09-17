import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
/* import GoogleMap from "../../GoogleMap";
 */
import Modal from "../../../Modal";

export class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      trips: [],
      show: false
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

  toggleModal = () => {
    this.setState({ ...this.state, show: !this.state.show });
  };

  render() {
    console.log(this.state);
    let trips = this.state.trips.slice(0, 3).map(trip => {
      return (
        <div className="tripCard" id={"trip" + trip.trip_id} key={trip.trip_id}>
          <Link to={"/post/" + trip.trip_id}>
            <img
              className="tripImg"
              src={"http://localhost:3000/images/" + trip.image}
              alt=""
            />
            <div className="trophy">
              <img src="http://localhost:3000/images/best.png" alt="" />
            </div>
          </Link>
          <button onClick={this.toggleModal}>Toggle me</button>
        </div>
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
        {this.state.show ? (
          <Modal className="modal">
            <div>
              <button onClick={this.toggleModal}>Toggle me</button>
            </div>
          </Modal>
        ) : null}
        {/*         <GoogleMap />
         */}
      </div>
    );
  }
}

export default HomePage;
