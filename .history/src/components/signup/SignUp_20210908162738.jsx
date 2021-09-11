import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Form, Button } from "react-bootstrap";

const SignUp = () => {
  return (
    <Container>
      <Row className="justify-content-md-cente">
        <Form className='card'>
          .text-align
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Firstname</Form.Label>
            <Form.Control name="name" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Lastname</Form.Label>
            <Form.Control name="name" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone number</Form.Label>
            <Form.Control name="number" placeholder="Enter phone number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default SignUp;
