import React, { Component } from "react";

export default class Quote extends Component {
  selectStyle = (liked, disliked) => {
    switch (true) {
      case liked == true && disliked == false:
        console.log("liked == true && disliked==false");
        return { fontWeight: "bold", color: "green" };
        break;
      case liked == false && disliked == true:
        console.log("liked == false && disliked == true");
        return {
          fontWeight: "normal",
          color: "red"
        };
        break;
      default:
        return {
          fontWeight: "normal",
          color: "black"
        };
        break;
    }
  };

  render() {
    const { quoteItem, liked, disliked } = this.props;
    return (
      <div className="quoteCard" id={quoteItem._id}>
        <div className="likesCounter">
          <b>
            Likes: {quoteItem.likeness} Dislikes: {quoteItem.dislikeness}
          </b>
        </div>
        <div className="quoteText" style={this.selectStyle(liked, disliked)}>
          {quoteItem.quoteText}
        </div>
        <div>by: {quoteItem.quoteAuthor}</div>
        <div className="likes-dislikes">
          <div className="likes-dislikes-hellyeah">
            <button
              className="likes"
              onClick={this.props.quoteLiked}
              name="likes"
            >
              Yeah!
            </button>
          </div>
          <div className="likes-dislikes-boo">
            <button
              className="disliked"
              onClick={this.props.quoteDisLiked}
              name="disliked"
            >
              Boo!
            </button>
          </div>
        </div>
      </div>
    );
  }
}
