import { FC } from "react";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard: FC<ProductCardProps> = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img
        src={product?.image || ""}
        alt={product?.name}
        className="w-full h-64 object-cover"
      />
      <h2 className="text-lg font-bold mt-2">{product?.name}</h2>
      <p className="text-gray-500">${product?.price.toFixed(2)}</p>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => addToCart(product)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
