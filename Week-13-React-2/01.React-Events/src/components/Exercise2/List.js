import React, { Component } from "react";
import Contact from "./Contact";

class List extends Component {
  //should recieve the prop "contact"
  render() {
    return (
      <div>
        {this.props.contacts.map(c => (
          <Contact name={c} key={c} displayConvo={this.props.displayConvo} />
        ))}
      </div>
    );
  }
}

export default List;
