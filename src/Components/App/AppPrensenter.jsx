import React from "react";
import Header from "../Header";
import Flex from "styled-flex-component";
import Notification from "../Notification";

const AppPresenter = () => (
  <>
    <Header />
    <Flex alignCenter full column>
      <Notification seen={false} text={"hello"} />
    </Flex>
  </>
);

export default AppPresenter;
