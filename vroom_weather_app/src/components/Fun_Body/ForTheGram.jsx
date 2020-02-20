import React from "react";

import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function GramCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1516226922151-acfb54072c5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9/"
            alt="Snowy Perfect Winter Engagement Shoot"
          />
          <Carousel.Caption>
            <h3>Perfect Shoot </h3>
            <p>#thanksVrooming #letItSnow</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1579602747233-91f0cec30864?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
            alt="Foggy Fraternity Hike"
          />

          <Carousel.Caption>
            <h3>Fraternity Hike</h3>
            <p>#brothersThroughItAll #Character #LongJohns #checkVrooming</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1489773072903-7209418b9342?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
            alt="Sunset Girls Night"
          />

          <Carousel.Caption>
            <h3>Clear Sky Girls Night</h3>
            <p>#noRainCheck #Vrooming #adulting</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Jumbotron>
        <h1>Vroom on...</h1>
        <p>
          Let us know what Vrooming Weather has helped you tackle in your life.
          Big & Small. <br></br>Tag us on social media!
        </p>
        <p>
          <Button href="/" variant="primary">
            See Current Weather
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
}
