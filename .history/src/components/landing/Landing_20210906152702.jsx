import React from "react";
import { Container , Row} from "react-bootstrap";
import "bootstrap/dist/bootstrap.min.css”;
import dark from "../images/dark.png";

function Landing() {
  return (
    <Container>
      <Row>
           <img src={dark} alt="" srcset="" />
      </Row>
    </Container>
    
  );
}

export default Landing;
