import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InfoCard.css";

const InfoCard = ({ data }) => {
  const { title, description, icon, background } = data;
  return (
    <div className="col-md-4">
      <div
        className={`d-flex justify-content-around info-box info-${background}`}
      >
        <div className="icon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div>
          <h1>{title}</h1>
          <small>{description}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
