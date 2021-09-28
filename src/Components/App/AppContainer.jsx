import React, { Component } from "react";
import AppPresenter from "./AppPrensenter";
import Store from "../../store";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`${reset}; body{background-color:#ecf0f1}`;

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this._changeMessage = () => {
      if (this.state.message === "hello") {
        this.setState({ message: "bye bye" });
      } else {
        this.setState({ message: "hello" });
      }
    };
    this.state = { message: "hello", changeMessage: this._changeMessage };
  }

  render() {
    return (
      <Store.Provider value={this.state}>
        <GlobalStyle />
        <AppPresenter />
      </Store.Provider>
    );
  }
}

export default AppContainer;
