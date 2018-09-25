import React, { Component } from "react";
import { connect } from "react-redux";

import { Text, Headline, font } from "../../components/Typography";
import { Container } from "../../components/UI/Layout";
import {
  Entry,
  WeatherList,
  WeatherListItem
} from "../../components/WeatherChart";

class ForecastList extends Component {
  renderForecast(cityData) {
    const { name, country } = cityData.city;
    const { list } = cityData.list;
    const weatherData = list.map(data => {
      const i = list.indexOf(data) + 8;

      if (i % 8 === 0) {
        const formattedDate = data.dt_txt.replace(/-/g, ",");
        const d = new Date(formattedDate);
        const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        const day = days[d.getDay()];
        const { icon, main } = data.weather[0];

        return (
          <Entry key={data.dt_txt}>
            <Text bold color="yellow">
              {day}
            </Text>
            <img
              src={`http://openweathermap.org/img/w/${icon}.png`}
              alt={main}
            />
          </Entry>
        );
      }

      return null;
    });

    return (
      <WeatherListItem key={name}>
        <Entry>
          <Headline bold font={font.secondary}>
            {name} ({country})
          </Headline>
        </Entry>
        {weatherData}
      </WeatherListItem>
    );
  }

  render() {
    return (
      <Container width="60%">
        <WeatherList>{this.props.weather.map(this.renderForecast)}</WeatherList>
      </Container>
    );
  }
}

const mapStateToProps = ({ weather }) => ({ weather });

export default connect(mapStateToProps)(ForecastList);
