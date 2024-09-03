import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "./pages/home";
import Product from "./pages/product";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Header from "./components/header";
import Footer from "./components/footer";
import ErrorPage from "./pages/not-found";

import "@/styles/global.css";

// Layout component to include Header and Footer
const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use Layout component
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
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
