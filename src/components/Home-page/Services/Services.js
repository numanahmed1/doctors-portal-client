import React from "react";
import "./Services.css";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import ServiceDetails from "../ServiceDetails/ServiceDetails";

const servicesData = [
  {
    name: "Fluoride Treatment",
    img: fluoride,
  },
  {
    name: "Cavity Filling",
    img: cavity,
  },
  {
    name: "Teeth Whitening",
    img: whitening,
  },
];
const Services = () => {
  return (
    <section id="services">
      <div className="text-center">
        <h5>Our Services</h5>
        <h1>Services We Provided</h1>
      </div>
      <div className="container">
        <div className="row">
          {servicesData.map((service) => (
            <ServiceDetails service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
