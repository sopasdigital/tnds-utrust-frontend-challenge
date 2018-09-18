import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchWeather } from '../../actions';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ searchTerm: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    
    this.props.fetchWeather(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  }

  render() {
    return (
      <form className="SearchBar" onSubmit={this.onFormSubmit}>
        <input className="SearchBar-Input"
          placeholder="Search for a city..."
          value={this.state.searchTerm}
          onChange={this.onInputChange}
          />
        <span className="SearchBar-Button">
          <button type="submit">Submit</button>
        </span>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather }
}

export default connect(mapStateToProps, { fetchWeather })(SearchBar);

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchWeather }, dispatch);
// }

// export default connect(null, mapDispatchToProps)(SearchBar);
