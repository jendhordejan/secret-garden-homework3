import React, { Component } from "react";

export default class Title extends Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
}
