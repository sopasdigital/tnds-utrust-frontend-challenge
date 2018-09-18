import React, { Component } from 'react';
import { connect } from 'react-redux';

import Graphic from '../Graphic'
import './WeatherToday.css';

class WeatherToday extends Component {
  render() {
    const fetchedCity = this.props.weather[0];

    if (!fetchedCity) {
      return (
        <div className="WeatherToday u-width40">
          <h1 className="WeatherToday-Title">Weather or Not</h1>
          <p className="WeatherToday-Description">Get the latest forecast for a city by searching for it above!</p>
          <div className="WeatherToday-Img">
            <Graphic />
          </div>
        </div>
      );
    }

    const number = fetchedCity.list[0].main.temp - 273.15;
    const tempInC = parseFloat( number.toFixed(1) );

    return (
      <div className="WeatherToday u-width40">
        <h1 className="WeatherToday-Title">{fetchedCity.city.name}</h1>
        <p className="WeatherToday-Description">{fetchedCity.list[0].weather[0].main}</p>
        <div className="WeatherToday-Img">
          <h2 className="WeatherToday-Temp">{tempInC} &deg;C</h2>
          <Graphic />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherToday);

