import React, { Component } from "react";
import Quote from "./Quote";

export default class QuoteSearcherDisplay extends Component {
  render() {
    // const { quotes } = this.props;
    const displayQuote = this.props.quotes.map(quoteItem => {
      return (
        <Quote
          quoteItem={quoteItem}
          quoteLiked={() => this.props.quoteLiked(quoteItem._id)}
          quoteDisLiked={() => this.props.quoteDisLiked(quoteItem._id)}
          liked={quoteItem.liked}
          disliked={quoteItem.disliked}
        />
      );
    });
    return <div className="QuoteList">{displayQuote}</div>;
  }
}
