import React, { useState } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import "./SignUp.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  return (
    <Container>
      <Row className="content">
        <Form className="card w-50 h-50 mt-4">
          <div className="text-center">
            <h3 className="text-center">Get Started</h3>
            <p>Sign up to have access to Healthbank</p>
          </div>
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
          
          
          <div className="mb-3 form-group" controlId="formBasicPassword">
            <div className=>Password</div>
            <Form.Control
              type={passwordShown ? "text" : "password"}
              placeholder="Password"
            />
            <Icon icon="ant-design:eye-invisible-outlined" onClick={togglePassword} />
          </div>
          
          
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <small>
              By signing up, you agree to the
              <span className="text-danger">Terms &amp; Conditions</span> and
              <span className="text-danger">Privacy Policy</span>
            </small>
          </Form.Group>
          <div className="small"></div>
          <Button variant="danger" type="submit">
            Sign Up
          </Button>
          <div className="text-center mt-3">
            <p>
              Already have an account?
              <span className="text-danger">Sign in</span>
            </p>
          </div>
        </Form>
      </Row>
    </Container>
  );
};

export default SignUp;
