import React, { useState } from "react";
import { Form } from "react-bootstrap";
import time from "../../assets/images/time.png";

const Client = () => {
  const [checked, setChecked] = useState("");
  const handleChange = (e) => {
    setChecked(e.target.value);
  };

  return (
    <div className="primary-color">
      <h6>Client:</h6>
      <div className="mb-4 d-flex">
        <Form.Check className="me-4" type="radio" id={`check-api-radio`}>
          <Form.Check.Input
            type="radio"
            isValid
            value="option1"
            checked={checked === "option1"}
            onChange={handleChange}
          />
          <Form.Check.Label>Single</Form.Check.Label>
        </Form.Check>
        <Form.Check>
          <Form.Check.Input
            type="radio"
            value="option2"
            checked={checked === "option2"}
            onChange={handleChange}
          />
          <Form.Check.Label>Multiple</Form.Check.Label>
        </Form.Check>
      </div>
      <div>
        <div className="flex-between-center mb-3">
          <Form.Label>Testing Center 1</Form.Label>
          <div className="flex-between-center">
            <Form.Select
              aria-label="Select Client"
              className="select-small me-4"
            >
              <option>Select Client</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <img src={time} alt="time" width={20} />
          </div>
        </div>
        <div className="flex-between-center mb-3">
          <Form.Label>Testing Center 2</Form.Label>
          <div className="flex-between-center">
            <Form.Select
              aria-label="Select Client"
              className="select-small me-4"
            >
              <option>Select Client</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <img src={time} alt="time" width={20} />
          </div>
        </div>
        <div className="flex-between-center mb-3">
          <Form.Label>Testing Center 3</Form.Label>
          <div className="flex-between-center">
            <Form.Select
              aria-label="Select Client"
              className="select-small me-4"
            >
              <option>Select Client</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <img src={time} alt="time" width={20} />
          </div>
        </div>
        <div className="flex-between-center">
          <Form.Label>Testing Center 4</Form.Label>
          <div className="flex-between-center">
            <Form.Select
              aria-label="Select Client"
              className="select-small me-4"
            >
              <option>Select Client</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <img src={time} alt="time" width={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
