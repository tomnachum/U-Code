import "./Letter.css";
import React, { Component } from "react";

class Letter extends Component {
  invokeSelectLetter = () => {
    this.props.selectLetter(this.props.letter);
  };

  render() {
    return (
      <span className={this.props.className} onClick={this.invokeSelectLetter}>
        {this.props.letter}
      </span>
    );
  }
}

export default Letter;
