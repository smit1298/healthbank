import React from 'react';
import { Container, Row, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const input = ({name, label, value, placeholder }) => {
    return (
        <div>
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label htmlFor={name}>{label}</Form.Label>
            <Form.Control
              autoFocus 
              name={name}
              placeholder= {`Enter ${}`}
              value={value}

              
            />

          </Form.Group>
        </div>
    )
}

export default input
