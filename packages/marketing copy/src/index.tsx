import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/home-page";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilesPages from "./pages/profiles-page";
import ErrorPage from "./pages/not-found-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profiles",
    element: <ProfilesPages />,
  },
]);

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
