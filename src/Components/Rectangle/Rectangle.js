import React, { Component } from "react";
import "./Rectangle.css";

export default class Rectangle extends Component {
  state = {
    currentColor: "rgb(228, 134, 134)",
    pressButtonClicked: false,
  };
  changeColor = () => {
    this.setState({ currentColor: "green" });
  };

  render() {
    let backgroundCol = "";
    if (this.props.colorData) {
      backgroundCol = "green";
    } else {
      backgroundCol = this.state.currentColor;
    }
    return (
      <div
        className="rectangle"
        style={{ backgroundColor: backgroundCol }}
      ></div>
    );
  }
}
