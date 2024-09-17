import { FC, useEffect, useState } from "react";
import axios from "axios";
import { useStore } from "../store/use-store";
import ProductList from "../components/product-list";
import { Product } from "../types";

const Home: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const addToCart = useStore((state) => state.addToCart);

  useEffect(() => {
    // Fetch products from Fake Store API
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div
      className="container mx-auto p-6"
      style={{ maxHeight: "calc(100vh - 120px)", overflowY: "auto" }}
    >
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default Home;
