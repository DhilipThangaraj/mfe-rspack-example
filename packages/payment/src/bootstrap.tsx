import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster } from "./components/ui/toaster.tsx";
import "@/styles/global.css";

const mount = (el: HTMLElement) => {
  const root = ReactDOM.createRoot(el);
  root.render(
    <React.StrictMode>
      <App />
      <Toaster />
    </React.StrictMode>
  );
};

//If the environment is development
if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("shared_app4_payment");

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
