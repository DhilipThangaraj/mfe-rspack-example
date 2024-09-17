import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster } from "./components/ui/toaster.tsx";
import "@/styles/global.css";

const container = document.getElementById("shared_app4_payment");
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
      <Toaster />
    </React.StrictMode>
  );
}
