import React from "react";
import { Container } from "react-bootstrap";
import dark from "../images/dark.png";

function Landing() {
  return (
    <Container>
      <Row>
           <img src={dark} alt="" srcset="" />
      </Row>
    </Container>
    // <div>
    //     <img src={dark} alt="" srcset="" />
    // </div>
  );
}

export default Landing;
