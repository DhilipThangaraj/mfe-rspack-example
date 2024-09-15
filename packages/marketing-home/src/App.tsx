import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home-page";
import Product from "./pages/product-page";

import "@/styles/global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
