import React from "react";
import Chair from "../../../images/chair.png";
import "./HeaderMain.css";

const HeaderMain = () => {
  return (
    <main className="container-fluid ">
      <div className="row header-main">
        <div className="col-md-4 offset-md-1">
          <h1>
            Your New Smile <br /> Starts Here
          </h1>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            odio maxime temporibus neque nesciunt porro?
          </p>
          <button className="btn btn-success">Get Appointment</button>
        </div>
        <div className="col-md-6">
          <img src={Chair} className="img-fluid" alt="" />
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;
