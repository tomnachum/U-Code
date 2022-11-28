import React, { Component } from "react";

class Exercise1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
    };
  }

  alertMessage = () => {
    alert(
      `Come in ${this.state.name} you're ${this.state.age} - that's good enough`
    );
  };

  handleInputChange = e => {
    const value = e.target.value;
    const inputName = e.target.name;
    this.setState({
      [inputName]: value,
    });
  };

  render() {
    return (
      <div>
        <input
          id="name-input"
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <input
          id="age-input"
          name="age"
          value={this.state.age}
          onChange={this.handleInputChange}
        />
        <button onClick={this.alertMessage}>Go to Bar</button>
      </div>
    );
  }
}

export default Exercise1;
