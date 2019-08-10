import React, { Component } from "react";
import "./CreateTrip.css";
import TimePicker from "rc-time-picker";
import axios from "axios";
/* import DatePicker from "react-datepicker";
 */
import "rc-time-picker/assets/index.css";

import "react-datepicker/dist/react-datepicker.css";

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
      tripImage: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

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
    let data = new FormData();
    console.log("SUBMITTING THE FORM");
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

    axios
      .post("/api/trips", data)
      .then(res => {
        console.log("Success");
        console.log(res);
        /*         this.props.history.push("/trips");
         */ window.location.reload();

        /*         this.props.history.push("/");
         */
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

  render() {
    return (
      <div className="formContainer">
        <div className="headingCreate">
          <p>
            ───────────────────────── CREATE YOUR OWN TRIP
            ─────────────────────────
          </p>
        </div>

        <form
          className="form"
          onSubmit={this.submitForm}
          encType="multipart/form-data"
        >
          <label>
            <input
              className="user_input"
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              className="user_input"
              type="text"
              placeholder="Description"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </label>
          {/* <div>
            <DatePicker
              className="user_input"
              placeholderText="Starting date"
              value={this.state.startDate}
              selected={this.state.startDate}
              onChange={date => this.handleDateChange("startDate", date)}
            />
            <DatePicker
              className="user_input"
              placeholderText="Ending date"
              value={this.state.endDate}
              selected={this.state.endDate}
              onChange={date => this.handleDateChange("endDate", date)}
            />
          </div> */}
          <div>
            <TimePicker
              placeholder="Starting time"
              showSecond={false}
              onChange={time => this.handleDateChange("start_hour", time)}
              format="HH:mm"
            />
            <TimePicker
              placeholder="Ending time"
              showSecond={false}
              onChange={time => this.handleDateChange("end_hour", time)}
            />
          </div>

          <label>
            <input
              className="user_input"
              type="text"
              placeholder="Space"
              name="space"
              value={this.state.space}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              className="user_input"
              type="text"
              placeholder="Location"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Price:
            <input
              className="user_input"
              type="text"
              placeholder="Price $"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Select a tripImage that describes your trip the best
            <input
              className="user_input"
              type="file"
              name="tripImage"
              /*               value={this.state.tripImage}
               */ onChange={this.fileChanged}
            />
          </label>

          <button className="createButton" onSubmit={this.submitForm}>
            CREATE
          </button>
        </form>
      </div>
    );
  }
}

export default CreateTrip;
