import { FC } from "react";
import { Product } from "../types";
import ProductCard from "./product-card";

interface ProductListProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const ProductList: FC<ProductListProps> = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
