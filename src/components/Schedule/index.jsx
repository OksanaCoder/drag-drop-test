import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Schedule = () => {
  const [checked, setChecked] = useState("");
  const handleChange = (e) => {
    setChecked(e.target.value);
  };

  return (
    <div className="elem-w-border">
      <h6 className="mt-5 primary-color bold-text">
        Split schedule using social distancing?
      </h6>
      <div className="d-flex">
        <Form.Check className="mb-4 me-4" type="radio" id={`check-api-radio`}>
          <Form.Check.Input
            type="radio"
            isValid
            value="option1"
            checked={checked === "option1"}
            onChange={handleChange}
          />
          <Form.Check.Label>Yes</Form.Check.Label>
        </Form.Check>
        <Form.Check>
          <Form.Check.Input
            type="radio"
            value="option2"
            checked={checked === "option2"}
            onChange={handleChange}
          />
          <Form.Check.Label>No</Form.Check.Label>
        </Form.Check>
      </div>
    </div>
  );
};

export default Schedule;
