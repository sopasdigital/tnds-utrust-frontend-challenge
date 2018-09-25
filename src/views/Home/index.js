import React from "react";

import ForecastList from "../../containers/ForecastList";
import WeatherToday from "../../components/WeatherToday";
import Template from "../../components/UI/Layout/template";

const Home = () => (
  <Template>
    <WeatherToday />
    <ForecastList />
  </Template>
);

export default Home;
