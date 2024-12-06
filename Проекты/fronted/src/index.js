import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MainPage, LoginPage, AppealsPage } from "./Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/appeals" element={<AppealsPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
