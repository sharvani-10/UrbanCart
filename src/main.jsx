import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { Store } from "./Redux/Store.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);
