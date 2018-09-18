import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ForecastList.css';

class ForecastList extends Component {
  renderForecast(cityData) {
    const name = cityData.city.name;
    const weatherData = cityData.list.map( data => {
      const i = cityData.list.indexOf(data) + 8;

      if ( i%8 === 0 ) {
        const formattedDate = data.dt_txt.replace(/-/g,",");
        const d = new Date(formattedDate);
        const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        const day = days[d.getDay()];

        return(
          <span key={data.dt_txt} className="Entry">
            <span className="Entry-Label">{day}</span>
            <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt={data.weather[0].main} />
          </span>
        );
      }

      return null;
    });
    
    return (
      <li key={name} className="WeatherList-Item">
        <span className="Entry-Title">{name}</span>
        {weatherData}
      </li>
    );
  }

  render() {
    return (
      <div className="u-width60">
        <ul className="WeatherList">
          {
            this.props.weather.map(this.renderForecast)
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(ForecastList);
