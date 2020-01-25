import React, { Component } from "react";
import Title from "./Title";
import QuoteSearcherDisplay from "./QuoteSearcherDisplay";
import SearchQuotes from "./SearchQuotes";
export default class QuoteSearcher extends Component {
  state = {
    loading: false,
    quotes: [],
    liked: false,
    disliked: false,
    query: "tree",
    noResult: false
  };

  invokeAPIToFetchData = async () => {
    try {
      const quoteItems = await fetch(
        `https://quote-garden.herokuapp.com/quotes/search/${this.state.query}`
      );
      const parsedQuoteItems = await quoteItems.json();
      const updateQuoteList = parsedQuoteItems.results.map(q => {
        return {
          ...q,
          liked: false,
          disliked: false,
          likeness: 0,
          dislikeness: 0
        };
      });

      console.log("updateQuoteListcount: ", updateQuoteList.length);
      this.setState({
        loading: true,
        noResult: false,
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
        ? {
            ...quoteItem,
            liked: true,
            disliked: false,
            likeness: quoteItem.likeness + 1
          }
        : quoteItem
    );
    this.setState({ quotes: updatedQuotes });
  };

  quoteDisLiked = id => {
    const quoteList = this.state.quotes;
    console.log("quoteLiked ID", id);
    const updatedQuotes = quoteList.map(quoteItem =>
      quoteItem._id === id
        ? {
            ...quoteItem,
            liked: false,
            disliked: true,
            dislikeness: quoteItem.dislikeness + 1
          }
        : quoteItem
    );
    this.setState({ quotes: updatedQuotes });
    console.log("checkState: ", updatedQuotes);
    console.log("updated checkState", this.state.quotes);
  };

  componentDidMount = async () => {
    this.invokeAPIToFetchData();
  };

  changeQuery = searchQuery => {
    this.setState({ query: searchQuery, loading: false }, () => {
      this.invokeAPIToFetchData();
    });
  };

  submitNewQuote = (quoteText, quoteAuthor) => {
    console.log("Player being added!", quoteText);
    const newQuote = {
      id: Math.trunc(Math.random() * 10000),
      quoteText,
      quoteAuthor
    };
    this.setState({
      quotes: [...this.state.quotes, newQuote]
    });
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
        <SearchQuotes changeQuery={this.changeQuery} />
        <div className="displayQuote">
          <QuoteSearcherDisplay
            quotes={this.state.quotes}
            quoteLiked={this.quoteLiked}
            quoteDisLiked={this.quoteDisLiked}
            submitNewQuote={this.submitNewQuote}
          />
        </div>
        {this.state.quotes.length === 0 && (
          <div>
            There seems to be no quotes for this topic yet. Be the first one to
            contribute and inspire others!
          </div>
        )}
      </div>
    );
  }
}
