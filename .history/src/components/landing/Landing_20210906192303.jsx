import React from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Landing.css";
import dark from "../images/dark.png";
import ellipse from "../images/Ellipse 1.png";

function Landing() {
  return (
    <Container fluid className="hero">
      <div className="dark mt-2">
        <img src={dark} alt="" srcset="" />
        <img src={ellipse} alt="" srcset="" />
      </div>
    </Container>
  );
}

export default Landing;