import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const mount = (el: HTMLElement) => {
  const root = ReactDOM.createRoot(el);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

//If the environment is development
if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("shared_app1_auth");

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
