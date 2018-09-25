import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchWeather } from "../../actions";
import { Text } from "../../components/Typography";
import {
  SearchInput,
  SearchBarContainer,
  Icon,
  SearchBarButton
} from "../../components/UI/Inputs";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: "" };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.searchTerm);
    this.setState({ searchTerm: "" });
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <SearchBarContainer>
          <Icon />
          <SearchInput
            placeholder="Search for a city..."
            value={this.state.searchTerm}
            onChange={this.onInputChange}
          />
          <SearchBarButton>
            <button type="submit">
              <Text color="white" bold>
                Submit
              </Text>
            </button>
          </SearchBarButton>
        </SearchBarContainer>
      </form>
    );
  }
}

const mapStateToProps = ({ weather }) => ({ weather });

export default connect(
  mapStateToProps,
  { fetchWeather }
)(SearchBar);
