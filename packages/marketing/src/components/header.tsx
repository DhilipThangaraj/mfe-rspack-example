import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          My E-Commerce
        </Link>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/cart" className="hover:underline">
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
