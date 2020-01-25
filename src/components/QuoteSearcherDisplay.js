import React, { Component } from "react";
import Quote from "./Quote";
import AddQuote from "./AddQuote";

export default class QuoteSearcherDisplay extends Component {
  render() {
    const displayQuote = this.props.quotes.map(quoteItem => {
      return (
        <div>
          <Quote
            quoteItem={quoteItem}
            quoteLiked={() => this.props.quoteLiked(quoteItem._id)}
            quoteDisLiked={() => this.props.quoteDisLiked(quoteItem._id)}
            liked={quoteItem.liked}
            disliked={quoteItem.disliked}
          />
        </div>
      );
    });
    return (
      <div className="QuoteList">
        <AddQuote submitNewQuote={this.props.submitNewQuote} />
        {displayQuote}
      </div>
    );
  }
}
