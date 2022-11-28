import logo from "./logo.svg";
import "./App.css";
import Solution from "./components/Solution/Solution";
import Score from "./components/Score/Score";
import Letters from "./components/Letters/Letters";
import React from "react";
import EndGame from "./components/EndGame/EndGame";

const WORD = "CALM";
const HINT = "Your ideal mood when coding";
const INIT_SCORE = 100;

const NUM_OF_LETTERS = 26;
const ASCII_OF_LOWER_A = 65;

const INCREASE_POINTS = 5;
const REDUCE_POINTS = 20;

const END_GAME_SCORE = 0;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word: WORD,
        hint: HINT,
      },
      score: INIT_SCORE,
    };
  }

  generateLetterStatuses() {
    let letterStatus = {};
    for (let i = 0; i < NUM_OF_LETTERS; i++) {
      letterStatus[String.fromCharCode(ASCII_OF_LOWER_A + i)] = false;
    }
    return letterStatus;
  }

  selectLetter = l => {
    if (this.state.letterStatus[l]) {
      return;
    }
    let updatedLetterStatus = { ...this.state.letterStatus };
    updatedLetterStatus[l] = true;
    this.setState({
      letterStatus: updatedLetterStatus,
      score: this.getUpdatedScore(l),
    });
  };

  getUpdatedScore = l => {
    if (this.state.solution.word.includes(l)) {
      return this.state.score + INCREASE_POINTS;
    } else {
      return this.state.score - REDUCE_POINTS;
    }
  };

  hasUserFoundWord = () => {
    return this.state.solution.word
      .split("")
      .every(c => this.state.letterStatus[c]);
  };

  isScoreTooLow = () => {
    return this.state.score <= END_GAME_SCORE;
  };

  isEndGame = () => {
    return this.hasUserFoundWord() || this.isScoreTooLow();
  };

  render() {
    return (
      <div className="app">
        {this.isEndGame() ? (
          <EndGame
            word={this.state.solution.word}
            hasUserFoundWord={this.hasUserFoundWord()}
          />
        ) : (
          <div>
            <Score score={this.state.score} />{" "}
            <Solution
              letterStatus={this.state.letterStatus}
              solution={this.state.solution}
            />
            <Letters
              letterStatus={this.state.letterStatus}
              selectLetter={this.selectLetter}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
