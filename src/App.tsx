import Rotas from "./Rotas/index";
import React from "react";
import { ListProvider } from "providers/ListProvider";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <ListProvider>
      <Provider store={store}>
        <Rotas />
      </Provider>
    </ListProvider>
  );
}

export default App;
