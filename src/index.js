import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import rootReducer from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());
console.log(store.getState());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
