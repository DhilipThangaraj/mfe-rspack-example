import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import withSuspense from "./hoc/with-suspense";
import Layout from "./layout";
import ErrorPage from "./pages/not-found-page";
import "@/styles/global.css";

const RemoteLoginApp = withSuspense(
  lazy(() => import("./components/auth-app"))
);
const RemoteMarketingHomeApp = withSuspense(
  lazy(() => import("./components/marketing-home-app"))
);
const RemotePaymentAddressApp = withSuspense(
  lazy(() => import("./components/payment-address-app"))
);

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
      {
        path: "auth/:subpath",
        element: (
          <div className="mt-32">
            <RemoteLoginApp />
          </div>
        ),
      },
      {
        path: "/cart",
        element: (
          <div className="mt-32">
            <div>{"Add to cart page"}</div>
          </div>
        ),
      },
      {
        path: "/payment",
        element: (
          <div className="mt-32">
            <RemotePaymentAddressApp />
          </div>
        ),
      },
    ],
  },
]);

const App = () => {
  console.log("????????????????????router-container", router);
  return <RouterProvider router={router} />;
};

export default App;
