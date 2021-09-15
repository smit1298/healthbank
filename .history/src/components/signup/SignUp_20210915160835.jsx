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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

const [firstNameErr, setFirstNameErr] = useState({});
const [lastNameErr, setLastNameErr] = useState({});

  const onSubmit = (e)=>{
    e.preventDefault();
    const isValid = formValidation();
  }

  const formValidation = () =>{
const firstNameErr = {};

  }

  return (
    <Container>
      <Row className="content">
        <Form className="card w-50 h-50 mt-4" onSubmit={onSubmit}>
          <div className="text-center">
            <h3 className="text-center">Get Started</h3>
            <p>Sign up to have access to Healthbank</p>
          </div>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Firstname</Form.Label>
            <Form.Control name="name" placeholder="Enter Firstname" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Lastname</Form.Label>
            <Form.Control name="name" placeholder="Enter Lastname"value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Phone number</Form.Label>
            <Form.Control name="number" placeholder="Enter phone number" />
          </Form.Group>
          <div
            className="mb-3 form-group right-seen"
            controlId="formBasicPassword"
          >
            <div className="form-label">Password</div>
            <input
              className="form-control"
              type={passwordShown ? "text" : "password"}
              placeholder="Password"
            />
            <Icon
              className="seen"
              icon="ant-design:eye-invisible-outlined"
              onClick={togglePassword}
            />
          </div>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <small>
              By signing up, you agree to the
              <span className="text-danger">Terms &amp; Conditions</span> and
              <span className="text-danger"> Privacy Policy</span>
            </small>
          </Form.Group>
          <Button variant="danger" type="submit">
            Sign Up
          </Button>
          <div className="text-center mt-3">
            <p>
              Already have an account?
              <span className="text-danger"> Sign in</span>
            </p>
          </div>
        </Form>
      </Row>
    </Container>
  );
};

export default SignUp;
