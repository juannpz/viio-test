/* eslint-disable no-unused-vars */

import "./index.css";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import store from "./redux/store.js"

if (typeof global === 'undefined') {
  window.global = window;
}

axios.defaults.baseURL = "https://api-chat.whatacart.ai" 

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
  </BrowserRouter>
);
