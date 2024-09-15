import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const mount = () => {
  const rootEl = document.getElementById("shared_app2_marketing");
  if (rootEl) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
};

mount();
