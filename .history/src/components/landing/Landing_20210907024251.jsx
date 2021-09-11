import React from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import dark from "../images/dark.png";
import { Icon } from "@iconify/react";
import ellipse from "../images/Ellipse 1.png";
import "./Landing.css";

function Landing() {
  return (
    <Container fluid>
      <div className="darks mt-2">
        <img classname="dark" src={dark} alt="" srcset="" />
        {/* <img classname='ellipse' src={ellipse} alt="" srcset="" /> */}
      </div>
      <div className="chat position-absolute bottom-0 end-0"">
        <Icon icon="ci:message-minus" color="red" width="222" height="222" />{" "}
      </div>
    </Container>
  );
}

export default Landing;
