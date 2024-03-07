import React, { useState } from "react";
import Switch from "react-ios-switch";
import time from "../../assets/images/time.png";
import "./style.css";

const Tolerance = () => {
  const [checked, setCheched] = useState(true);
  const handleChange = () => {
    setCheched(!checked);
  };
  return (
    <div className="my-4 primary-color">
      <h6 className="bold-text primary-color">Tolerance Window:</h6>
      <div className="d-flex align-items-center ">
        <div className="d-flex align-items-center ">
          <Switch
            checked={checked}
            className="me-2"
            handleColor="white"
            offColor="white"
            onChange={handleChange}
            onColor="#1b3e73"
          />
          Toggle ON
        </div>
        <div className="ms-5 vertical-line d-flex align-items-center ">
          <img src={time} width={25} alt="time" className="me-2" />
          Select Tolearnce Level
        </div>
      </div>
    </div>
  );
};

export default Tolerance;
