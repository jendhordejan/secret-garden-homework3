import React, { Component } from "react";
import Title from "./Title";
import QuoteSearcherDisplay from "./QuoteSearcherDisplay";

export default class QuoteSearcher extends Component {
  state = {
    loading: false,
    quotes: []
  };

  invokeAPIToFetchData = async () => {
    try {
      const quoteItems = await fetch(
        `https://quote-garden.herokuapp.com/quotes/search/tree`
      );
      const parsedQuoteItems = await quoteItems.json();
      this.setState({
        loading: true,
        quotes: parsedQuoteItems.results
      });
    } catch (error) {
      this.setState({
        error: error
      });
    }
  };
  componentDidMount = async () => {
    this.invokeAPIToFetchData();
  };

  render() {
    console.log("check quote state", this.state);
    const displayQuote = this.state.quotes.map(quoteItem => {
      return (
        <div>
          <QuoteSearcherDisplay
            id={quoteItem._id}
            quote={quoteItem.quoteText}
            author={quoteItem.quoteAuthor}
          />
        </div>
      );
    });
    return !this.state.loading ? (
      <div>
        <Title title="Quotes" />
        <h2>Loading...</h2>
      </div>
    ) : (
      <div>
        <Title title="Quotes" />
        <div className="displayQuote">{displayQuote}</div>
      </div>
    );
  }
}
