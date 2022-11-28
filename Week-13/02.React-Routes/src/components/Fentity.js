import React, { Component } from "react";
import "../styles/fentity.css";

class Fentity extends Component {
  render() {
    const fentityName = this.props.match.params.fentities;
    const entityName = this.props.match.params.name;
    const fentity = this.props.state[fentityName].find(
      f => f.name === entityName
    );
    return (
      <div id="creature-container">
        <h1>{fentity.name}</h1>
        <img src={fentity.imgUrl} alt="" />
        <div className="title">Power:</div>
        <div className="power text"> {fentity.power}</div>
        <div className="other text">{fentity.other}</div>
      </div>
    );
  }
}

export default Fentity;
