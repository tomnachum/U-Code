import React, { Component } from "react";

class Exercise2 extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      fruit: "",
    };
  }

  handleInputChange = e => {
    const value = e.target.value;
    const inputName = e.target.name;
    this.setState(
      {
        [inputName]: value,
      },
      () => {
        if (inputName === "fruit") {
          console.log(`${this.state.name} selected ${this.state.fruit}`);
        }
      }
    );
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
        <select
          id="select-input"
          name="fruit"
          value={this.state.fruit}
          onChange={this.handleInputChange}
        >
          <option value="" hidden>
            Select Fruit...
          </option>
          <option value="Apple">Apple</option>
          <option value="Grapes">Grapes</option>
          <option value="Mango">Mango</option>
          <option value="Watermelon">Watermelon</option>
        </select>
      </div>
    );
  }
}

export default Exercise2;
