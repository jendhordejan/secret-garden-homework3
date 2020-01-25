import React, { Component } from "react";
import Title from "./Title";
import QuoteSearcherDisplay from "./QuoteSearcherDisplay";

export default class QuoteSearcher extends Component {
  state = {
    loading: false,
    quotes: [],
    liked: false,
    disliked: false
  };

  invokeAPIToFetchData = async () => {
    try {
      const quoteItems = await fetch(
        `https://quote-garden.herokuapp.com/quotes/search/tree`
      );
      const parsedQuoteItems = await quoteItems.json();
      console.log("parsedQuoteItems", parsedQuoteItems);
      const updateQuoteList = parsedQuoteItems.results.map(q => {
        return { ...q, liked: false, disliked: false };
      });
      this.setState({
        loading: true,
        quotes: updateQuoteList
      });
    } catch (error) {
      this.setState({
        error: error
      });
    }
  };

  quoteLiked = id => {
    const quoteList = this.state.quotes;
    console.log("quoteLiked ID", id);
    const updatedQuotes = quoteList.map(quoteItem =>
      quoteItem._id === id
        ? { ...quoteItem, liked: true, disliked: false }
        : quoteItem
    );
    this.setState({ quotes: updatedQuotes });
  };

  quoteDisLiked = id => {
    const quoteList = this.state.quotes;
    console.log("quoteLiked ID", id);
    const updatedQuotes = quoteList.map(quoteItem =>
      quoteItem._id === id
        ? { ...quoteItem, liked: false, disliked: true }
        : quoteItem
    );
    this.setState({ quotes: updatedQuotes });
    console.log("checkState: ", updatedQuotes);
    console.log("updated checkState", this.state.quotes);
  };

  componentDidMount = async () => {
    this.invokeAPIToFetchData();
  };

  render() {
    return !this.state.loading ? (
      <div>
        <Title title="Quotes" />
        <h2>Loading...</h2>
      </div>
    ) : (
      <div>
        <Title title="Quotes" />
        <div className="displayQuote">
          <QuoteSearcherDisplay
            quotes={this.state.quotes}
            quoteLiked={this.quoteLiked}
            quoteDisLiked={this.quoteDisLiked}
          />
        </div>
      </div>
    );
  }
}
