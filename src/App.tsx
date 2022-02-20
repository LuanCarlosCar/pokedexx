import RotutesPage from "./RotutesPage/index";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <RotutesPage />
    </Provider>
  );
}

export default App;
