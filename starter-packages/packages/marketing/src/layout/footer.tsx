import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} My E-Commerce. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
