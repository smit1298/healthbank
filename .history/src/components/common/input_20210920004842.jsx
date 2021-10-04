import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const input = ({ name, label, value, type  }) => {
  return (
    <div>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label htmlFor={name}>{label}</Form.Label>
        <Form.Control
          
          name={name}
          value={value}
          placeholder={`Enter  ${label}`}
          type={type}
        />
      </Form.Group>
    </div>
  );
};

export default input;
