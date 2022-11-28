import React, { Component } from "react";

class Exercise1 extends Component {
  constructor() {
    super();
    this.state = {
      images: [
        "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
        "https://play-lh.googleusercontent.com/OfqqfUvCcKkl607euNPo92hcsKGQ1tI-0xUgTpcsMiUOQhqUmjo1LuJWPRdwAZ1NAZg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg",
      ],
      currentImg: 0,
    };
  }
  shiftImageBack = () => {
    // this should reduce currentImg by 1
    this.setState({
      currentImg:
        (this.state.images.length + this.state.currentImg - 1) %
        this.state.images.length,
    });
  };
  shiftImageForward = () => {
    // shiftImageForward - this should increase currentImg by 1
    this.setState({
      currentImg: (this.state.currentImg + 1) % this.state.images.length,
    });
  };

  render() {
    return (
      <div>
        <button className="back" onClick={this.shiftImageBack}>
          Previous
        </button>
        <img src={this.state.images[this.state.currentImg]} alt=""></img>
        <button className="forward" onClick={this.shiftImageForward}>
          Next
        </button>
      </div>
    );
  }
}

export default Exercise1;
