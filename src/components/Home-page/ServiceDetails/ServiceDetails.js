import React from "react";
import "./ServiceDetails.css";

const ServiceDetails = ({ service }) => {
  const { name, img } = service;

  return (
    <div className="col-md-4 text-center mt-5 service-detail">
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cum!
      </p>
    </div>
  );
};

export default ServiceDetails;
