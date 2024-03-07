import React from "react";
import { Form } from "react-bootstrap";

const Select = () => {
  return (
    <div className="my-5 elem-w-border">
      <Form.Select aria-label="Select Import Name:" className="form-bold">
        <option>Select Import Name:</option>
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
      </Form.Select>
    </div>
  );
};

export default Select;
