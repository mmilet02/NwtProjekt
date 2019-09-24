import React, { Component } from "react";
import "./TripDetails.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchSingleTrip,
  deleteTrip,
  clearTrip,
  addComment
} from "../../../actions/tripActions";
import Comment from "./Comments/Comments.js";

export class TripDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      loading: false
    };
    this.deleteTrip = this.deleteTrip.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log("mounting");
    console.log(this.props);
    this.props.fetchSingleTrip(this.props.match.params.id);

    window.scrollTo(0, 0);
  }

  deleteTrip(event) {
    event.preventDefault();
    this.props.deleteTrip(this.props.trip.id);
  }

  componentWillUnmount() {
    this.props.clearTrip();
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      comment: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.addComment(this.props.trip.id, this.state.comment);
    this.setState({
      loading: false,
      comment: ""
    });
  }

  render() {
    console.log(this.props);
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
            {this.props.trip.UserId === this.props.user.id ? (
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
                WHAT {this.props.trip.UserId} and {this.props.user.id}
              </p>
            )}
          </div>
        ) : (
          <p>Not logged in</p>
        )}
        <Comment
          comments={this.props.comments}
          onSubmit={this.onSubmit}
          handleChange={this.handleChange}
          comment={this.state.comment}
        />
        <button className="bookNow">BOOK NOW</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  trip: state.tripReducer.trip,
  comments: state.tripReducer.comments,
  isLoggedIn: state.userReducer.isLoggedIn,
  user: state.userReducer.user
});

export default connect(
  mapStateToProps,
  { fetchSingleTrip, deleteTrip, clearTrip, addComment }
)(TripDetails);
