import React, { Component } from "react";

class EndGame extends Component {
  render() {
    return (
      <div>
        {this.props.hasUserFoundWord ? (
          <div>Congratulations! You gueesed the word!</div>
        ) : (
          <div>
            You Lost.
            <br />
            The secret word is: {this.props.word}
            <br />
            Try again by refreshing the page.
          </div>
        )}
      </div>
    );
  }
}

export default EndGame;
