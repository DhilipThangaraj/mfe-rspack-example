import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1>Page Not Found</h1>
      <Link to="/">Click to Redirect to Home Page</Link>
    </div>
  );
};

export default ErrorPage;
