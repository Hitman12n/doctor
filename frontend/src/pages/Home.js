// seniorwellhub-frontend/src/components/HomePage.js

import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Import CSS file for styling

const HomePage = () => {
  return (
    <div className="container">
      <h1 className="welcome-text">Welcome to SeniorWell Hub</h1>
      <div className="section">
        <h2>Services</h2>
        <p>Explore our services here...</p>
      </div>
      <div className="section">
        <h2>Doctor Appointment Booking</h2>
        <p>Click below to book an appointment:</p>
        <Link to="/book-appointment">
          <button className="btn">Book Appointment</button>
        </Link>
      </div>
      <div className="section">
        <h2>Events</h2>
        <p>Check out upcoming events...</p>
      </div>
      <div className="section">
        <h2>About</h2>
        <p>Contact Us</p>
      </div>
    </div>
  );
};

export default HomePage;
