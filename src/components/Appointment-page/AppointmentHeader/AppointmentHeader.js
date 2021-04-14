import React, { useState } from "react";
import Calendar from "react-calendar";
import Chair from "../../../images/chair.png";
import "react-calendar/dist/Calendar.css";
import "./AppointmentHeader.css";

const AppointmentHeader = ({ handleDateChange }) => {
  return (
    <main className="container-fluid ">
      <div className="row appointment-header">
        <div className="col-md-4 offset-md-1">
          <h1>Appointment</h1>
          <Calendar
            className="calender-main"
            onChange={handleDateChange}
            value={new Date()}
          />
        </div>
        <div className="col-md-6">
          <img src={Chair} className="img-fluid" alt="" />
        </div>
      </div>
    </main>
  );
};

export default AppointmentHeader;
