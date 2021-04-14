import React, { useState } from "react";
import NavigationBar from "../../Shared/Navbar/NavigationBar";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import BookAppointment from "../BookAppointment/BookAppointment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <>
      <NavigationBar />
      <AppointmentHeader handleDateChange={handleDateChange} />
      <BookAppointment date={selectedDate} />
    </>
  );
};

export default Appointment;
