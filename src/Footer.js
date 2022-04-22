import React from 'react';
import { Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <Container >
    <Row
      className="justify-content-center fixed-bottom mt-5"
      style={{ color: "#9003a2" }}
    >
      <p>
        © 2022 Morgan Hobbs
      </p>
    </Row>
  </Container>
  )
}
export default Footer;