import "./Score.css";
import React, { Component } from "react";

const HIGH_SCORE_THRESHOLD = 80;
const LOW_SCORE_THRESHOLD = 50;
const HIGH_SCORE_CLASS = "high-score";
const MEDIUM_SCORE_CLASS = "medium-score";
const LOW_SCORE_CLASS = "low-score";

class Score extends Component {
  getScoreClass = () => {
    const score = this.props.score;
    if (score >= HIGH_SCORE_THRESHOLD) {
      return HIGH_SCORE_CLASS;
    } else if (score > LOW_SCORE_THRESHOLD && score < HIGH_SCORE_THRESHOLD) {
      return MEDIUM_SCORE_CLASS;
    } else {
      return LOW_SCORE_CLASS;
    }
  };

  render() {
    return <div className={this.getScoreClass()}>{this.props.score}</div>;
  }
}

export default Score;
