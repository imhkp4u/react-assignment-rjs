import React, { Component } from "react";
import "./Button.css";

export default class Button extends Component {
  render() {
    return (
      <div>
        <button className="pressButton" onClick={this.props.buttonClickHandler}>
          Press
        </button>
        <p>{this.props.alrtmsg}</p>
      </div>
    );
  }
}
