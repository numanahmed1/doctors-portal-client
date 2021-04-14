import React, { useState } from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const BookingCard = ({ booking }) => {
  const { subject, visitingHours, totalSpace } = booking;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="col-md-4 mt-4">
      <h3>{subject}</h3>
      <p>{visitingHours}</p>
      <p>{totalSpace} Available Space</p>
      <button onClick={openModal}>Book Appointment</button>
      <AppointmentForm
        booking={booking}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default BookingCard;
