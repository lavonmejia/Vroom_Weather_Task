import React, { useEffect, useState } from "react";

import axios from "axios";

import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Badge from "react-bootstrap/Badge";

// Importing use-position to get current browser position
import { usePosition } from "use-position";

export default function GetFiveDay() {
  // get the location variables from usePosition
  const { latitude, longitude, timestamp, accuracy, error } = usePosition();

  // state variables to hold the response from the API
  const [fiveDayWeather, setFiveDayWeather] = useState();

  let dateFilter = forecast => {
    let dt = new Date(forecast.dt * 1000);
    let hr = dt.getUTCHours();
    return hr == 12;
  };

  useEffect(() => {
    axios
      .get(
        //   populate the api call with the latitude and longitude of the location
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=32cddcf330af3f3a6c27f66b15443c42`
      )

      .then(response => {
        response.data.list = response.data.list.filter(dateFilter);
        setFiveDayWeather(response.data);
        // setFiveDayWeather(response_data);
      });
    //   The use effect array needs something to know when to call the API. We're saying to call the api whenver the latitude or longitude updates.
  }, [latitude, longitude]);

  //   Return needs an if/else to support not having the api called yet or not having the variables at all. Error handling could be more robust
  if (fiveDayWeather) {
    // let icon_image = `http://openweathermap.org/img/wn/${oneDayWeather.weather[0]["icon"]}@2x.png`;
    return (
      // Examples below of pulling data out of the data object
      <section>
        <Badge className="m-2" variant="secondary">
          <h4> {fiveDayWeather.city.name}</h4>
        </Badge>{" "}
        <Row>
          <CardDeck className="m-3">
            <Card
              bg="info"
              text="white"
              border="info"
              style={{ width: "18rem" }}
            >
              <Card.Img variant="top" src="noun_sun_62160.png" />
              <Card.Body>
                <Card.Title> Day 1 </Card.Title>
                <Card.Text>
                  <span>
                    Temp:{" "}
                    <strong>{fiveDayWeather.list[0]["main"].temp} F</strong>
                  </span>
                  <br></br>
                  <span>
                    Will Feel Like:{" "}
                    <strong>
                      {" "}
                      {fiveDayWeather.list[0]["main"].feels_like} F{" "}
                    </strong>
                  </span>
                  <span>
                    Humidity:{" "}
                    <strong>{fiveDayWeather.list[0]["main"].feels_like}</strong>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              bg="warning"
              text="white"
              border="info"
              style={{ width: "18rem" }}
            >
              <Card.Img variant="top" src="noun_sun_62160.png" />
              <Card.Body>
                <Card.Title>Day 2</Card.Title>
                <Card.Text>
                  <span>
                    Temp:{" "}
                    <strong>{fiveDayWeather.list[1]["main"].temp} F</strong>
                  </span>
                  <span>
                    Will Feel Like:{" "}
                    <strong>
                      {" "}
                      {fiveDayWeather.list[1]["main"].feels_like} F{" "}
                    </strong>
                  </span>
                  <span>
                    Humidity:{" "}
                    <strong>{fiveDayWeather.list[1]["main"].feels_like}</strong>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              bg="info"
              text="white"
              border="info"
              style={{ width: "18rem" }}
            >
              <Card.Img variant="top" src="noun_sun_62160.png" />
              <Card.Body>
                <Card.Title>Day 3</Card.Title>
                <Card.Text>
                  <span>
                    Temp:{" "}
                    <strong>{fiveDayWeather.list[2]["main"].temp} F</strong>
                  </span>
                  <span>
                    Will Feel Like:{" "}
                    <strong>
                      {" "}
                      {fiveDayWeather.list[2]["main"].feels_like} F{" "}
                    </strong>
                  </span>
                  <span>
                    Humidity:{" "}
                    <strong>{fiveDayWeather.list[2]["main"].feels_like}</strong>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              bg="warning"
              text="white"
              border="info"
              style={{ width: "18rem" }}
            >
              <Card.Img variant="top" src="noun_sun_62160.png" />
              <Card.Body>
                <Card.Title>Day 4</Card.Title>
                <Card.Text>
                  <span>
                    Temp:{" "}
                    <strong>{fiveDayWeather.list[3]["main"].temp} F</strong>
                  </span>
                  <span>
                    Will Feel Like:{" "}
                    <strong>
                      {" "}
                      {fiveDayWeather.list[3]["main"].feels_like} F{" "}
                    </strong>
                  </span>
                  <span>
                    Humidity:{" "}
                    <strong>{fiveDayWeather.list[3]["main"].feels_like}</strong>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              bg="info"
              text="white"
              border="info"
              style={{ width: "18rem" }}
            >
              <Card.Img variant="top" src="noun_sun_62160.png" />
              <Card.Body>
                <Card.Title>Day 5</Card.Title>
                <Card.Text>
                  <span>
                    Temp:{" "}
                    <strong>{fiveDayWeather.list[4]["main"].temp} F</strong>
                  </span>
                  <span>
                    Will Feel Like:{" "}
                    <strong>
                      {" "}
                      {fiveDayWeather.list[4]["main"].feels_like} F{" "}
                    </strong>
                  </span>
                  <span>
                    Humidity:{" "}
                    <strong>{fiveDayWeather.list[4]["main"].feels_like}</strong>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Row>
        {console.log(fiveDayWeather.list)}
      </section>
    );
  } else {
    return (
      <section>
        <span>Loading....</span>
      </section>
    );
  }
}
