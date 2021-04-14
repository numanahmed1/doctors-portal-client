import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import {
  faClock,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./BusinessInfo.css";

const infoData = [
  {
    title: "Opening Hours",
    description: "We are open 7 days",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visit Our Location",
    description: "4519  Jefferson Street, Virginia",
    icon: faMapMarkerAlt,
    background: "dark",
  },
  {
    title: "Contact Us Now",
    description: "757-678-7154",
    icon: faPhoneAlt,
    background: "primary",
  },
];
const BusinessInfo = () => {
  return (
    <section id="business-info" className="container">
      <div className="row">
        {infoData.map((data) => (
          <InfoCard data={data} />
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
