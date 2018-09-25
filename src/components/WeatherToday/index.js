import React, { Component } from "react";
import { connect } from "react-redux";

import Graphic from "../Graphic";
import { Headline, Heading, Temp } from "../Typography";
import { Container } from "../../components/UI/Layout";

class WeatherToday extends Component {
  render() {
    const fetchedCity = this.props.weather[0];

    if (!fetchedCity) {
      return (
        <Container justifyLeft width="40%">
          <Heading color="purple">Weather or Not</Heading>
          <Headline>Search for a city and get the latest forecast!</Headline>
          <Container>
            <Graphic />
          </Container>
        </Container>
      );
    }

    const { temp } = fetchedCity.list[0].main;
    const tempInC = parseFloat((temp - 273.15).toFixed(1));

    return (
      <Container justifyLeft width="40%">
        <Heading color="purple">
          {fetchedCity.city.name}, {fetchedCity.city.country}
        </Heading>
        <Headline>{fetchedCity.list[0].weather[0].main}</Headline>
        <Container>
          <Temp color="white">{tempInC} &deg;C</Temp>
          <Graphic />
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = ({ weather }) => ({ weather });

export default connect(mapStateToProps)(WeatherToday);
