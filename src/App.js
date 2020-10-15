import React, { Component } from "react";
import "./App.css";
import Button from "./Components/Button/Button";
import Rectangle from "./Components/Rectangle/Rectangle";

class App extends Component {
  state = {
    isButtonPressed: false,
    alertMessage: "",
  };
  buttonClickHandler = () => {
    this.setState({ isButtonPressed: true, alertMessage: "Button Clicked" });
  };
  render() {
    return (
      <div className="App">
        <Rectangle colorData={this.state.isButtonPressed} />
        <Button
          alrtmsg={this.state.alertMessage}
          buttonClickHandler={this.buttonClickHandler}
        />
      </div>
    );
  }
}

export default App;
