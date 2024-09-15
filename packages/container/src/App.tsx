import React, { lazy } from "react";

// const RemoteLogin = lazy(() => import("shared_app1/Login"));
const RemoteMarketingHomeApp = lazy(
  () => import("./components/marketing-home-app")
);

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout";

import ErrorPage from "./pages/not-found-page";

import "@/styles/global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use Layout component
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <RemoteMarketingHomeApp />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
