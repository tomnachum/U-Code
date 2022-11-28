import React, { Component } from "react";

class Contact extends Component {
  displayConversation = () => {
    this.props.displayConvo(this.props.name);
  };

  render() {
    return <div onClick={this.displayConversation}>{this.props.name}</div>;
  }
}

export default Contact;
