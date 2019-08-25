import React, { Component } from "react";
import "./TripDetails.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSingleTrip, deleteTrip } from "../../../actions/tripActions";
import axios from "axios";

export class TripDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
    };
    this.deleteTrip = this.deleteTrip.bind(this);
  }

  componentWillMount() {
    console.log("mounting");
    console.log(this.props);
    this.props.fetchSingleTrip(this.props.match.params.id);

    axios
      .get("/api/users/user/" + this.props.trip.UserId)
      .then(res => {
        console.log("user", res);
        this.setState({
          id: res.data.id
        });
      })
      .catch(err => console.log(err));
  }

  deleteTrip(event) {
    event.preventDefault();
    this.props.deleteTrip(this.props.trip.id);
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
        {this.props.isLoggedIn ? (
          <div>
            {this.props.trip.UserId === this.props.user.user.id ? (
              <div>
                <button className="bookNow" onClick={this.deleteTrip}>
                  Delete
                </button>
                <Link to={"/edit/" + this.props.trip.id}>
                  <button className="bookNow">Edit</button>
                </Link>
              </div>
            ) : (
              <p>
                WHAT {this.props.trip.UserId} and {this.props.user.user.id}
              </p>
            )}
          </div>
        ) : (
          <p>Not logged in</p>
        )}

        <button className="bookNow">BOOK NOW</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  trip: state.tripReducer.trip,
  isLoggedIn: state.userReducer.isLoggedIn,
  user: state.userReducer.user
});

export default connect(
  mapStateToProps,
  { fetchSingleTrip, deleteTrip }
)(TripDetails);
