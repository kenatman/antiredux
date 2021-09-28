import React, { Component } from "react";
import AppPresenter from "./AppPrensenter";
import Store from "../../store";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`${reset}; body{background-color:#ecf0f1}`;

class AppContainer extends Component {
  state = { message: "hello", loggedIn: false };
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
