import "./index.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { App } from "App";
import { StrictMode } from "react";
import { BrowserRouter, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
      <App />
    </Provider>
  </StrictMode>
);
