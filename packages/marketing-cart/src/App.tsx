import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Cart from "./pages/cart-page";
import Checkout from "./pages/checkout-page";

import "@/styles/global.css";

const router = createBrowserRouter([
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
