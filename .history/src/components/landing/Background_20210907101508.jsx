import React from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import dark from "../images/dark.png";
import { Icon } from "@iconify/react";
import ellipse from "../images/Ellipse 1.png";
import "./Ba.css";

function Ba() {
  return (
    <Container fluid>

      <div className="position-relative position-relative-example">
        <div className="darks mt-2">
          <img classname="dark" src={dark} alt="" srcset="" />
          {/* <img classname='ellipse' src={ellipse} alt="" srcset="" /> */}
        </div>
        <div className="position-absolute top-80 end-0">
          <Icon className="chat"
            icon="bx:bx-message-minus"
            color="#d71e1b"
            width="60"
            height="60"
          />
        </div>
      </div>
    </Container>
  );
}

export default Ba;
