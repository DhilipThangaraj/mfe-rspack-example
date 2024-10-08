import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          DV E-Commerce
        </Link>
        <nav className="space-x-4">
          <Link to="/cart" className="hover:underline">
            Cart
          </Link>
          <Link to="/auth/login" className="hover:underline">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
