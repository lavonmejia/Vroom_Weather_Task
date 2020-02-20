import React from "react";
import "./App.css";

import { Route } from "react-router-dom";

import Container from "react-bootstrap/Container";
import NavBar from "./components/Header/nav";
import OneDayBody from "./components/Weather_Body/One_Day_Body";
import Footer from "./components/Footer/footer";
import DemoCarousel from "./components/Fun_Body/ForTheGram";
import GetFiveDay from "./components/Weather_Body/Five_Day_Api";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <Container>
        <Route exact path="/" component={OneDayBody} />
        <Route exact path="/fiveforecast" component={GetFiveDay} />
        <Route exact path="/social" component={DemoCarousel} />

        <Footer />
      </Container>
    </div>
  );
}

export default App;
