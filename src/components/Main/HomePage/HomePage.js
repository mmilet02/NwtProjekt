import React, { Component } from "react";
import "./HomePage.css"
import home_img from "../../../images/header_background.jpg";
import transfer from "../../../images/transfer.jpg";
import hotel from "../../../images/hotel.png";
import fun from "../../../images/fun.png";

export class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      trips: []
    };
  }
  componentWillMount() {
    let trips = require("../../../trips.json");
    console.log(trips);
    this.setState({
      ...this.state,
      trips: trips
    });
  }
  render() {
    console.log(this.state);
    // let trips = this.state.trips.map(trip => {
    //   return (
    //     <div key={trip.trip_id}>
    //       <p>{trip.name}</p>
    //     </div>
    //   );
    // });
    return (
      <div>
        <div className="header_container"><img src={home_img} alt="" /></div>
        <h1>WELCOME</h1>
        <div className="img_container">
          <div className="pic"><img src={transfer} alt="" /></div>
          <div className="pic"><img src={hotel} alt="" /></div>
          <div className="pic"><img src={fun} alt="" /></div>
        </div>
      </div>
    );
  }
}

export default HomePage;
