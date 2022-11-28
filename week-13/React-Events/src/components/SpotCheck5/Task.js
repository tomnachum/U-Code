import React, { Component } from "react";

class Task extends Component {
  complete = () => {
    this.props.markComplete(this.props.text);
  };

  render() {
    return (
      <div>
        {this.props.text}
        <button className="complete" onClick={this.complete}>
          Complete
        </button>
      </div>
    );
  }
}

export default Task;
