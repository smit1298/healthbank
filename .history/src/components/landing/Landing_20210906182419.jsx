import React from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import dark from "../images/dark.png";

function Landing() {
  return (
    <Container fluid>
      <>
        <div className="dark">
          <img src={dark} alt="" srcset="" />
        </div>
        {/* <div className="dark">
          <img src={dark} alt="" srcset="" />
        </div> */}
      </>
    </Container>
  );
}

export default Landing;
