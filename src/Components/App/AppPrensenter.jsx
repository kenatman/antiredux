import React from "react";
import Header from "../Header";
import Flex from "styled-flex-component";
import Notification from "../Notification";
import Store from "../../store";

const AppPresenter = () => (
  <>
    <Header />
    <Flex alignCenter full column>
      <Store.Consumer>
        {(store) => {
          return Object.keys(store.notifications).map((key) => (
            <Notification
              key={store.notifications[key].id}
              id={store.notifications[key].id}
              text={store.notifications[key].text}
              seen={store.notifications[key].seen}
            />
          ));
        }}
      </Store.Consumer>
    </Flex>
  </>
);

export default AppPresenter;
