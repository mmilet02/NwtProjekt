import React, { Component } from "react";
import "./TripCard.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addLike, removeLike } from "../../../actions/tripActions";
import Modal from "../../../Modal";

export class TripCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      likes: [],
      liked:
        this.props.user !== null
          ? this.props.trip.likes.find(name => {
              console.log(name.userName, this.props.user.fullname);
              return name.userName === this.props.user.fullname;
            })
          : false
    };
    this.liked = this.liked.bind(this);
    this.unliked = this.unliked.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  liked() {
    this.props.addLike(this.props.trip.id);
    this.setState({
      ...this.state,
      likes: [...this.state.likes, { userName: this.props.user.fullname }],
      liked: !this.state.liked
    });
  }
  unliked() {
    this.props.removeLike(this.props.trip.id);
    this.setState({
      ...this.state,
      likes: this.state.likes.filter(likedBy => {
        return likedBy.userName != this.props.user.fullname;
      }),
      liked: !this.state.liked
    });
  }

  handleClose() {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  }
  componentDidMount() {
    console.log(this.props);

    this.setState({
      ...this.state,
      likes: this.props.trip.likes
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      this.setState({
        ...this.state,
        liked:
          this.props.user !== null
            ? this.props.trip.likes.find(name => {
                console.log(name.userName, this.props.user.fullname);
                return name.userName === this.props.user.fullname;
              })
            : false
      });
    }
  }

  toggleModal = () => {
    this.setState({ ...this.state, show: !this.state.show });
  };

  render() {
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
              <button onClick={this.toggleModal}>
                {this.props.trip.likes.length}
              </button>
            </div>
            {this.state.liked ? (
              <button disabled={!this.props.isLoggedIn} onClick={this.unliked}>
                UNLIKE
              </button>
            ) : (
              <button disabled={!this.props.isLoggedIn} onClick={this.liked}>
                LIKE
              </button>
            )}
          </div>
        </div>
        {this.state.show ? (
          <Modal className="modal">
            <div>
              <button onClick={this.toggleModal}>Close</button>
              {this.state.likes.map(like => (
                <p>{like.userName}</p>
              ))}
            </div>
          </Modal>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn
});

export default connect(
  mapStateToProps,
  { addLike, removeLike }
)(TripCard);
