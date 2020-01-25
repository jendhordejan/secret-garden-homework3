import React, { Component } from "react";

export default class AddQuote extends Component {
  state = {
    _id: 0,
    quoteText: "",
    quoteAuthor: ""
  };
  updateField = event => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    this.setState({
      [fieldName]: fieldValue
    });
  };

  onSubmit = event => {
    event.preventDefault();
    if (!this.state.quoteText) {
      console.log("you can not submit an empty quote");
      return;
    } else {
      this.props.submitNewQuote(this.state.quoteText, this.state.quoteAuthor);
    }
  };

  render() {
    return (
      <div className="addQuote">
        <form onSubmit={this.onSubmit}>
          <label>
            Your Quote:
            <input
              size="200"
              type="text"
              name="quoteText"
              value={this.state.quoteText}
              onChange={this.updateField}
              placeholder="Write your own quote and inspire others"
            />
            <br></br>
            Author:
            <input
              size="50"
              type="text"
              name="quoteAuthor"
              value={this.state.quoteAuthor}
              onChange={this.updateField}
            />
          </label>
          <input type="submit" value="Submit my quote" />
        </form>
      </div>
    );
  }
}
