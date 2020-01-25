import React, { Component } from "react";
import QuoteSearcherDisplay from "./QuoteSearcherDisplay";

export default class QuoteSearcher extends Component {
  state = {
    quotes: [
      {
        _id: "5d91b45d9980192a317c8acc",
        quoteText:
          "Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind.",
        quoteAuthor: "Bruce Lee"
      },
      {
        _id: "5d91b45d9980192a317c8abe",
        quoteText:
          "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.",
        quoteAuthor: "Abraham Lincoln"
      },
      {
        _id: "5d91b45d9980192a317c8955",
        quoteText:
          "Good timber does not grow with ease; the stronger the wind, the stronger the trees.",
        quoteAuthor: "J. Willard Marriott"
      }
    ]
  };

  render() {
    const displayQuote = this.state.quotes.map(quoteItem => {
      return (
        <QuoteSearcherDisplay
          id={quoteItem._id}
          quote={quoteItem.quoteText}
          author={quoteItem.quoteAuthor}
        />
      );
    });
    return (
      <div>
        <div className="displayQuote">{displayQuote}</div>
      </div>
    );
  }
}
