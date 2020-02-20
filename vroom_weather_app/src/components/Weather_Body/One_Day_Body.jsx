import React from "react";

import Row from "react-bootstrap/Row";

import OneWeatherCard from "./Weather_Card";


export default function OneDayBody() {
  return (
    <div>
   
    <Row className="m-auto">
      <OneWeatherCard />
    </Row>
    </div>
  );
}
