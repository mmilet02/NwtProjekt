import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/Main/HomePage/HomePage";
import Profile from "./components/Main/Profile/Profile";
import Register from "./components/Main/Auth/Register/Register";
import Login from "./components/Main/Auth/Login/Login";
import TripList from "./components/Main/TripList/TripList";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main_container">
          <Navbar />
          <div className="content">
            <Route exact path="/" component={HomePage} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/trips" component={TripList} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
