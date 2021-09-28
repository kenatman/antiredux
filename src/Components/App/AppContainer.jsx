import React, { Component } from "react";
import AppPresenter from "./AppPrensenter";
import Store from "../../store";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`${reset}; body{background-color:#ecf0f1}`;

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: {
        1: { id: 1, text: "running", seen: false },
        2: { id: 2, text: "coding", seen: false },
        3: { id: 3, text: "eating", seen: false },
      },
    };
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
