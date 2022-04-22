import React from "react";

import { Container, Row } from "react-bootstrap";

function Socials() {
  return (
    <Container className="icons">
    <Row>

      <a href="https://github.com/mo-hobbs" target="_blank">
        <span className="fa-brands fa-github"></span>
      </a>
    </Row>
    <Row>

      <a href="https://www.linkedin.com/in/morganlhobbs/" target="_blank">
        <span className="fa-brands fa-linkedin"></span>
      </a>
    </Row>
    <Row>

      <a href="https://mohobbs.blogspot.com/" target="_blank">
        <span className="fa-brands fa-blogger"></span>
      </a>
    </Row> 
    <Row>

      <a href="www.morganmoonchild.com" target="_blank">
        <span className="fa-solid fa-globe"></span>
      </a>
    </Row>
    </Container>
  );
}
export default Socials;
