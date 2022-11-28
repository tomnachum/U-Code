import React, { Component } from "react";

class Landing extends Component {
  /* your code here */

  render() {
    let hottestItem = this.props.hottest[0];
    return (
      <div>
        <p>Welcome, {this.props.user}</p>
        <p>
          Hottest Item: {hottestItem.item} costs {hottestItem.price}
        </p>
      </div>
    );
  }
}

export default Landing;
