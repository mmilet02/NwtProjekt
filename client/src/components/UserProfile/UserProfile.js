import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/userActions";
import { Redirect } from "react-router-dom";

class UserProfile extends Component {
  componentWillMount() {
    console.log("MOUNTEDD");
    console.log("props inc", this.props);
  }
  render() {
    if (
      this.props.isLoggedIn &&
      this.props.user.id == this.props.match.params.id
    ) {
      return <Redirect to="/profile" />;
    }
    return (
      <div>
        <h1>Profile with user ID {this.props.match.params.id}</h1>
        Trips created by this user ...
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn,
  user: state.userReducer.user
});

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserProfile);
