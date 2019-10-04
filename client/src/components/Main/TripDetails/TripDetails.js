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
import Comments from "./Comments/Comments.js";

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
    console.log(this.props.trip);
    let duration = 0;
    let start_hour = 0;
    let end_hour = 0;
    if (this.props.trip.start_hour) {
      start_hour = this.props.trip.start_hour.slice(16, 21);
      end_hour = this.props.trip.end_hour.slice(16, 21);
      const start = start_hour.slice(0, 2);
      const end = end_hour.slice(0, 2);
      duration = end - start;
    }
    return (
      <div className="tripDetailsContainer">
        <div className="detailsImg">
          <img src={"http://localhost:5000/" + this.props.trip.image} alt="" />
        </div>
        <div className="infoGlavni">
          <div className="firstRow">
            <div className="faDiv">
              <i className="fas fa-map-marker-alt fa-2x" />
              <p>{this.props.trip.location}</p>
            </div>
            <div className="faDiv">
              <i className="fas fa-hourglass-start fa-2x" />
              <p>{duration} hours</p>
            </div>
          </div>
          <div className="secondRow">
            <div className="faDiv">
              <i className="fas fa-tag fa-2x" />
              <p>{this.props.trip.price} kn</p>
            </div>

            <div className="faDiv">
              <i className="fas fa-ticket-alt fa-2x" />
              <p>{this.props.trip.freespace} places left</p>
            </div>
          </div>
          <div className="thirdRow">
            <div className="faDiv">
              <i className="far fa-calendar-alt fa-2x" />
              <div>
                <p> Start: {start_hour}h</p>
                <p> End: {end_hour}h</p>
              </div>
            </div>
            <div className="faDiv">
              <i className="fas fa-user-tie fa-2x" />
              <p>
                Posted by:
                <Link to={"/profile/user/" + this.props.trip.UserId}>
                  {this.props.trip.createdBy}
                </Link>
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="tripDescription">
          <p>{this.props.trip.description}</p>
        </div>
        <br />
        <br />

        {this.props.isLoggedIn ? (
          <div>
            {this.props.trip.UserId === this.props.user.id ? (
              <div className="botuni">
                <button className="bookNow" onClick={this.deleteTrip}>
                  Delete
                </button>
                <Link to={"/edit/" + this.props.trip.id}>
                  <button className="bookNow">Edit</button>
                </Link>
              </div>
            ) : (
              <p>
                <button className="bookNow">BOOK NOW</button>
              </p>
            )}
          </div>
        ) : null}
        <hr />
        <Comments
          comments={this.props.comments}
          onSubmit={this.onSubmit}
          handleChange={this.handleChange}
          comment={this.state.comment}
        />
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
