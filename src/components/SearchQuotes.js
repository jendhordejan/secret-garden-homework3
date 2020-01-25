import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SearchQuotes extends Component {
  propTypes = {
    changeQuery: PropTypes.func
  };
  state = { query: "" };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.query) {
      this.props.changeQuery(this.state.query);
    } else {
      return;
    }
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div className="search-quotes">
        <form onSubmit={this.handleSubmit}>
          <input
            size="32"
            type="text"
            name="query"
            onChange={this.handleChange}
            value={this.state.query}
            placeholder="type a topic of qoute"
          />

          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
