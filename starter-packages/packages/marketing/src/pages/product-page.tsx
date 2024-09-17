import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useStore } from "../store/use-store";
import { Product } from "../types";

const Product: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const addToCart = useStore((state) => state.addToCart);

  useEffect(() => {
    // Fetch the product by ID from Fake Store API
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col sm:flex-row">
        <img
          src={product?.image}
          alt={product?.title}
          className="w-full sm:w-1/2 h-64 object-cover"
        />
        <div className="sm:ml-6 mt-4 sm:mt-0">
          <h1 className="text-3xl font-bold">{product?.title}</h1>
          <p className="text-gray-600 mt-2">{product?.description}</p>
          <p className="text-xl font-semibold mt-4">
            ${product?.price?.toFixed(2)}
          </p>
          <button
            onClick={() => addToCart(product)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
