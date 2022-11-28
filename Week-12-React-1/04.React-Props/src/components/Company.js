import React, { Component } from "react";
import SubCompany from "./SubCompany";

class Company extends Component {
  render() {
    return (
      <div>
        <SubCompany name={this.props.name} />
      </div>
    );
  }
}

export default Company;
