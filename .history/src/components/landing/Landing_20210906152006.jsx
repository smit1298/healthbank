import React from "react";
import { Container , Col} from "react-bootstrap";
import dark from "../images/dark.png";

function Landing() {
  return (
    <Container>
      <Col>
           <img src={dark} alt="" srcset="" />
      </Col>
      <Row>
           <img src={dark} alt="" srcset="" />
      </Row>
    </Container>
    
  );
}

export default Landing;
