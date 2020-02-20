import React from "react";

import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavBar() {
  return (
    <div className="p-5">
      <Row>
        <Navbar
          bg="light"
          variant="light"
          fixed="top"
          collapseOnSelect
          expand="lg"
        >
          <Navbar.Brand href="/">LaVon's Vrooming Weather</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Today's Weather</Nav.Link>
              <Nav.Link href="/fiveforecast">5 Day Forecast</Nav.Link>
              <Nav.Link href="/social">Vrooming on Social</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/* Search Form for Later Versions, to include zipcode or city search */}
          {/* <NavSearchForm /> */}
        </Navbar>
      </Row>
      <Row></Row>
    </div>
  );
}
