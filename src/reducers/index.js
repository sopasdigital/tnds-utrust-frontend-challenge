import { combineReducers } from "redux";

import weatherReducer from "./reducerWeather";

//  Combines all reducers into 'rootReducer'
const rootReducer = combineReducers({
  weather: weatherReducer
});

export default rootReducer;
