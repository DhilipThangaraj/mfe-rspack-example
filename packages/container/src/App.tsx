import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import withSuspense from "./hoc/with-suspense";

const RemoteLoginApp = withSuspense(
  lazy(() => import("./components/login-app"))
);
const RemoteMarketingHomeApp = withSuspense(
  lazy(() => import("./components/marketing-home-app"))
);
const RemotePaymentAddressApp = withSuspense(
  lazy(() => import("./components/payment-address-app"))
);

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
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <RemoteMarketingHomeApp />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <RemoteLoginApp />
          </Suspense>
        ),
      },
      {
        path: "payment",
        element: (
          <div className="mt-32">
            <Suspense fallback={<div>Loading...</div>}>
              <RemotePaymentAddressApp />
            </Suspense>
          </div>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
