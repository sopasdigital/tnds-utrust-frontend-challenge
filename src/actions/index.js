import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const ROOT_URL = process.env.REACT_APP_ROOT_URL;

export const types = {
  FETCH_WEATHER_START: "FETCH_WEATHER_START",
  FETCH_WEATHER_COMPLETE: "FETCH_WEATHER_COMPLETE",
  FETCH_WEATHER_ERROR: "FETCH_WEATHER_ERROR"
};

export const fetchWeather = city => dispatch => {
  //  Request data via axios
  const url = `${ROOT_URL}${API_KEY}&q=${city}`;
  const {
    FETCH_WEATHER_START,
    FETCH_WEATHER_COMPLETE,
    FETCH_WEATHER_ERROR
  } = types;

  dispatch({ type: FETCH_WEATHER_START });

  axios
    .get(url)
    .then(response =>
      dispatch({ type: FETCH_WEATHER_COMPLETE, payload: response.data })
    )
    .catch(error =>
      dispatch({
        type: FETCH_WEATHER_ERROR,
        payload: error,
        error: true
      })
    );
};
