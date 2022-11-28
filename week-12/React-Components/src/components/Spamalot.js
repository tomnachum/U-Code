import Spam from "./Spam";
import React, { Component } from "react";

const SPAM_NUMBER = 500;

class Spamalot extends Component {
  render() {
    return [...Array(SPAM_NUMBER)].map(() => <Spam />);
  }
}

export default Spamalot;
