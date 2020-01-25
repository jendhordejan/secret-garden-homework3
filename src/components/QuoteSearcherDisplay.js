import React, { Component } from "react";

export default class QuoteSearcherDisplay extends Component {
  render() {
    const { id, quote, author } = this.props;
    return (
      <div className="quoteCard" id={id}>
        <div>{quote}</div>
        <div>by: {author}</div>
      </div>
    );
  }
}
