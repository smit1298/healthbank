import React, { useState } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import "./SignUp.css";
import validator from "validator";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  // Name validation
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [firstNameErr, setFirstNameErr] = useState({});
  const [lastNameErr, setLastNameErr] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      // send this data to your backend or some external API
      setFirstName("");
      setLastName("");
    }

    // call the server
    console.log("Submitted");
  };

  const formValidation = () => {
    const firstNameErr = {};
    const lastNameErr = {};
    let isValid = true;

    if (firstName.trim().length == " ") {
      firstNameErr.firstNameShort = "First name is required";
      isValid = false;
    }

    if (firstName.trim().length > 10) {
      firstNameErr.firstNameLong = "First name is too long";
      isValid = false;
    } 

    if (!lastName.includes("123")) {
      lastNameErr.lastName123 = "Last Name must have 123";
      isValid = false;
    }

    setFirstNameErr(firstNameErr);
    setLastNameErr(lastNameErr);
    return isValid;
  };

  // email validation
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError(
        <h6
          style={{
            fontWeight: "bold",
            color: "green"
          }}
        >
          Email is valid
        </h6>
      );
    } else {
      setEmailError(<h6>Enter a valid email</h6>);
    }
  };

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
            <Form.Control
              autoFocus
              name="name"
              placeholder="Enter Firstname"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            {Object.keys(firstNameErr).map((key) => {
              return <div style={{ color: "red" }}>{firstNameErr[key]}</div>;
            })}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Lastname</Form.Label>
            <Form.Control
              name="name"
              placeholder="Enter Lastname"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            {Object.keys(lastNameErr).map((key) => {
              return <div style={{ color: "red" }}>{lastNameErr[key]}</div>;
            })}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => validateEmail(e)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <h3
              style={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              {emailError}
            </h3>
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
