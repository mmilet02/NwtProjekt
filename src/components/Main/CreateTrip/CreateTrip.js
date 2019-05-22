import React, { Component } from "react";
import "./CreateTrip.css";

class CreateTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="formContainer">
        <div className="headingCreate">
          <p>───────────────────────── MY FAVORITE ─────────────────────────</p>
        </div>
        <form className="form">
          <label>
            <input
              className="user_input"
              type="text"
              placeholder="Name"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              className="user_input"
              type="text"
              placeholder="Surname"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              className="user_input"
              type="text"
              placeholder="Enter your email"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              className="user_input"
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              className="user_input"
              type="password"
              placeholder="Repeat password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>

          <button className="createButton">CREATE</button>
        </form>
      </div>
    );
  }
}

export default CreateTrip;
