import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';

import 'normalize.css';
import './utils/Typography.css';
import './App.css';
import SearchBar from './containers/SearchBar';
import ForecastList from './containers/ForecastList';
import WeatherToday from './components/WeatherToday';

//  Use middleware to create store for 'Provider'
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <div className="App">
          <SearchBar/>
          <div className="Container">
            <WeatherToday />
            <ForecastList />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
