import React, { Component } from "react";
import Item from "./Item";

class Home extends Component {
  render() {
    return this.props.store.map(item => (
      <div key={this.props.item}>
        {item.item} cost {item.price}
      </div>
    ));
  }
}

export default Home;
