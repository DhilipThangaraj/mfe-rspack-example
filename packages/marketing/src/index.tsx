import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/home-page";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <HomePage />
    </React.StrictMode>
  );
}
