import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./CreateTrip.css";
import { connect } from "react-redux";
import { createTrip } from "../../../actions/tripActions";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";

class CreateTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      start_hour: "",
      end_hour: "",
      space: "",
      price: "",
      location: "",
      tripImage: "",
      error: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  validator = () => {
    const {
      name,
      description,
      start_hour,
      end_hour,
      space,
      price,
      location,
      tripImage
    } = this.state;
    if (
      name &&
      description &&
      start_hour &&
      end_hour &&
      space &&
      location &&
      tripImage
    ) {
      return true;
    } else {
      this.setState({
        ...this.state,
        error: "All fields and an image is REQUIRED"
      });
    }
    window.scroll(0, 0);
    return false;
  };

  handleChange(e) {
    const { value, name } = e.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  }
  handleDateChange(dateName, dateValue) {
    this.setState({
      ...this.state,
      [dateName]: dateValue
    });
  }

  fileChanged = event => {
    console.log(event.target.files[0]);
    this.setState({
      ...this.state,
      tripImage: event.target.files[0]
    });
  };

  submitForm(e) {
    e.preventDefault();
    const isValid = this.validator();
    if (isValid) {
      let data = new FormData();
      data.append("name", this.state.name);
      data.append("description", this.state.description);
      data.append("start_hour", this.state.start_hour);
      data.append("end_hour", this.state.end_hour);
      data.append("space", this.state.space);
      data.append("price", this.state.price);
      if (!!this.state.tripImage) {
        data.append("tripImage", this.state.tripImage, "tripImage");
      }
      data.append("location", this.state.location);
      this.props.createTrip(data, this.props.history);
    } else {
      return;
    }
  }

  render() {
    return (
      <div className="formContainer">
        <div className="headingCreate">
          <p> CREATE YOUR OWN TRIP </p>
        </div>
        {this.state.error ? (
          <h4 style={{ textAlign: "center", color: "red" }}>
            {this.state.error}
          </h4>
        ) : null}
        <form
          className="form"
          onSubmit={this.submitForm}
          encType="multipart/form-data"
        >
          <label>
            <input
              className="user_input"
              type="text"
              placeholder="Destination"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <textarea
              className="text_area"
              type="text"
              placeholder="Description"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </label>

          <div>
            <TimePicker
              className="time"
              placeholder="Starting time"
              showSecond={false}
              onChange={time => this.handleDateChange("start_hour", time)}
              format="HH:mm"
            />
            <TimePicker
              className="time"
              placeholder="Ending time"
              showSecond={false}
              onChange={time => this.handleDateChange("end_hour", time)}
            />
          </div>

          <label>
            <input
              className="user_input"
              type="text"
              placeholder="Available space"
              name="space"
              value={this.state.space}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              className="user_input"
              type="text"
              placeholder="Departure Location"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              className="user_input"
              type="text"
              placeholder="Price per person"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </label>

          <label className="user_input">
            Select an image that describes your trip the best
            <input
              className="user_input"
              type="file"
              name="tripImage"
              /*               value={this.state.tripImage}
               */ onChange={this.fileChanged}
            />
          </label>

          <button className="bookNow" onSubmit={this.submitForm}>
            CREATE
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { createTrip }
)(withRouter(CreateTrip));
