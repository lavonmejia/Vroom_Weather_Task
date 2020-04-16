import React, { useEffect, useState } from "react";

import axios from "axios";

// Importing use-position to get current browser position
import { usePosition } from "use-position";

export default function GetOneDay() {
  // get the location variables from usePosition
  const { latitude, longitude, timestamp, accuracy, error } = usePosition();

  // state variables to hold the response from the API
  const [oneDayWeather, setOneDayWeather] = useState();

  useEffect(() => {
    axios
      .get(
        //   populate the api call with the latitude and longitude of the location
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=32cddcf330af3f3a6c27f66b15443c42`
      )
      .then((response) => {
        setOneDayWeather(response.data);
      });
    //   The use effect array needs something to know when to call the API. We're saying to call the api whenver the latitude or longitude updates.
  }, [latitude, longitude]);

  //   Return needs an if/else to support us not having the api called yet or not having the variables at all. Error handling could be more robust
  if (oneDayWeather) {
    // let icon_image = `http://openweathermap.org/img/wn/${oneDayWeather.weather[0]["icon"]}@2x.png`;
    return (
      // Examples below of us pulling data out of the data object

      <section>
        {console.log(oneDayWeather)}
        {console.log(oneDayWeather.weather[0]["main"])}
        GPS says you are in or very near: <h5>{oneDayWeather.name}</h5>
        <div>
          Temperature: <h5>{oneDayWeather.main.temp} F</h5>
        </div>
        <div>
          Feels Like: <h5>{oneDayWeather.main.feels_like} F </h5>
        </div>
        <div>
          Looks Like: <h5>{oneDayWeather.weather[0]["description"]}</h5>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${oneDayWeather.weather[0]["icon"]}@2x.png`}
          alt="weather icon"
        />
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
