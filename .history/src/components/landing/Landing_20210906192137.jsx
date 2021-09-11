import React from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Landing.css";
import dark from "../images/dark.png";
import dark from "../images/dark.png";

function Landing() {
  return (
    <Container fluid className="hero">
      <div className="dark mt-2">
        <img src={dark} alt="" srcset="" />
      </div>
    </Container>
  );
}

export default Landing;
