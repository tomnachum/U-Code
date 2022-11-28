import React, { Component } from "react";
import Conversation from "./Conversation";
import List from "./List";

class Exercise2 extends Component {
  constructor() {
    super();
    this.state = {
      displayConversation: null,
      conversations: [
        {
          with: "Laura",
          convo: [
            { text: "Hi", sender: "self" },
            { text: "You there?", sender: "self" },
            { text: "Yeah, hi, what's up?", sender: "other" },
          ],
        },
        {
          with: "Dad",
          convo: [
            {
              text: "Have you finished your school work yet?",
              sender: "other",
            },
            { text: "Yes.", sender: "self" },
            { text: "What do you mean, yes?", sender: "other" },
            { text: "??", sender: "self" },
          ],
        },
        {
          with: "Shoobert",
          convo: [
            { text: "Shoobert!!!", sender: "self" },
            { text: "Dude!!!!!!!!", sender: "other" },
            { text: "Shooooooooo BERT!", sender: "self" },
            { text: "You're my best friend", sender: "other" },
            { text: "No, *you're* my best friend", sender: "self" },
          ],
        },
      ],
    };
  }

  displayConvo = name => {
    this.setState({
      displayConversation: name,
    });
  };

  render() {
    return (
      <div>
        {this.state.displayConversation ? (
          <Conversation
            conversation={this.state.conversations.find(
              c => c.with === this.state.displayConversation
            )}
            sender={this.state.displayConversation}
            displayConvo={this.displayConvo}
          />
        ) : (
          <List
            contacts={this.state.conversations.map(c => c.with)}
            displayConvo={this.displayConvo}
          />
        )}
      </div>
    );
  }
}

export default Exercise2;
