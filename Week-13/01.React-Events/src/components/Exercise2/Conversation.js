import React, { Component } from "react";

class Conversation extends Component {
  back = () => {
    this.props.displayConvo(null);
  };
  render() {
    return (
      <div>
        {this.props.conversation.convo.map((m, i) => (
          <div key={i}>
            <span className="sender">
              <strong>
                {m.sender === "self" ? "Me" : this.props.sender}:{" "}
              </strong>
            </span>
            {m.text}
          </div>
        ))}
        <button onClick={this.back}>Back</button>
      </div>
    );
  }
}

export default Conversation;
