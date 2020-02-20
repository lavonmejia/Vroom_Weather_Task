import React from "react";

import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";

export default function Footer() {
  return (
    <Row>
      <Navbar
        bg="light"
        variant="light"
        fixed="bottom"
        collapseOnSelect
        expand="lg"
      >
        <Navbar.Brand>
          Have a Sunny Day, <br></br>No Matter the Weather!
        </Navbar.Brand>
      </Navbar>
    </Row>
  );
}
