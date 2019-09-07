import React, { Component } from "react";
import "./TripCard.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Popup from "reactjs-popup";
import { addLike } from "../../../actions/tripActions";

export class TripCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      likes: []
    };
    this.liked = this.liked.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  liked() {
    console.log("LIKED");
    this.props.addLike(this.props.trip.id);
    console.log(this.state);
    /*  this.setState({
      ...this.state,
      likes: this.state.likes.push({ userName: "something" })
    }); */
  }

  handleClose() {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      likes: this.props.trip.likes
    });
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
            <p>
              Created by:
              <Link to={"/profile/user/" + trip.UserId}> {trip.createdBy}</Link>
            </p>
            <Link to={"/trip/" + trip.id}>
              <div className="buttonDetails">
                <p>More details</p>
              </div>
            </Link>
          </div>
          <div className="infoFav">
            <i className="fas fa-heart fa-lg" />
            <div>
              Liked by
              <Popup
                trigger={<button> {this.props.trip.likes.length}</button>}
                position="right center"
                modal
                closeOnDocumentClick
              >
                <div>User that liked it...</div>
                {trip.likes.map(singleLike => {
                  return <div>{singleLike.userName}</div>;
                })}
              </Popup>
            </div>
            <button disabled={!this.props.isLoggedIn} onClick={this.liked}>
              LIKE
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn
});

export default connect(
  mapStateToProps,
  { addLike }
)(TripCard);
