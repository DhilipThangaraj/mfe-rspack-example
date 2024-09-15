import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home-page";
import Product from "./pages/product-page";
import Cart from "./pages/cart-page";
import Checkout from "./pages/checkout-page";
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

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
