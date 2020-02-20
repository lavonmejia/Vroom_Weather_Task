import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import GetOneDay from "./OneDayApi";

export default function OneWeatherCard() {
  return (
    <Container>
      <Row>
        <Col> </Col>
        <Col>
          <Card bg="info" text="white" border="info" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="noun_sun_62160.png" />
            <Card.Body>
              <Card.Title>Current Weather</Card.Title>
              <Card.Text>
                <GetOneDay />
              </Card.Text>
              <Button variant="primary" href="/fiveforecast">
                See 5-Day Forecast
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col> </Col>
      </Row>
    </Container>
  );
}
