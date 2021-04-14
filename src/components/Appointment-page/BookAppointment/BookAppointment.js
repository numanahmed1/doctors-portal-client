import React from "react";
import BookingCard from "../BookingCard/BookingCard";
import "./BookAppointment.css";

const bookingDate = [
  {
    _id: "343434",
    id: 1,
    subject: "Teeth Orthodontics",
    visitingHours: "8.00 AM - 9.00 AM",
    totalSpace: 10,
  },
  {
    _id: "343434",
    id: 2,
    subject: "Teeth Orthodontics",
    visitingHours: "8.00 AM - 9.00 AM",
    totalSpace: 10,
  },
  {
    _id: "343434",
    id: 3,
    subject: "Teeth Orthodontics",
    visitingHours: "8.00 AM - 9.00 AM",
    totalSpace: 10,
  },
  {
    _id: "343434",
    id: 4,
    subject: "Teeth Orthodontics",
    visitingHours: "8.00 AM - 9.00 AM",
    totalSpace: 10,
  },
  {
    _id: "343434",
    id: 5,
    subject: "Teeth Orthodontics",
    visitingHours: "8.00 AM - 9.00 AM",
    totalSpace: 10,
  },
  {
    _id: "343434",
    id: 6,
    subject: "Teeth Orthodontics",
    visitingHours: "8.00 AM - 9.00 AM",
    totalSpace: 10,
  },
];

const BookAppointment = ({ date }) => {
  return (
    <section className="book-appointment">
      <h1>Available Appointments on {date.toDateString()}</h1>
      <div className="container mt-5">
        <div className="row">
          {bookingDate.map((booking) => (
            <BookingCard key={booking.id} date={date} booking={booking} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;
