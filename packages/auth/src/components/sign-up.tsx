import React from "react";
import { useNavigate } from "react-router-dom";
import "@/styles/global.css";

const Signup: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-[420px] bg-gray-800 shadow-lg text-white rounded-lg p-8 border-2 border-gray-700">
          <form>
            <h1 className="text-4xl text-center mb-8 text-white">Sign Up</h1>

            <div className="relative w-full h-[50px] mb-8">
              <input
                className="w-full h-full bg-transparent border-2 border-gray-600 rounded-full text-lg text-white px-5 py-4 pr-[45px] placeholder-gray-400"
                type="text"
                placeholder="Username"
                required
              />
              <i className="bx bxs-user absolute right-5 top-1/2 transform -translate-y-1/2 text-xl text-gray-400"></i>
            </div>

            <div className="relative w-full h-[50px] mb-8">
              <input
                className="w-full h-full bg-transparent border-2 border-gray-600 rounded-full text-lg text-white px-5 py-4 pr-[45px] placeholder-gray-400"
                type="email"
                placeholder="Email"
                required
              />
              <i className="bx bxs-envelope absolute right-5 top-1/2 transform -translate-y-1/2 text-xl text-gray-400"></i>
            </div>

            <div className="relative w-full h-[50px] mb-8">
              <input
                className="w-full h-full bg-transparent border-2 border-gray-600 rounded-full text-lg text-white px-5 py-4 pr-[45px] placeholder-gray-400"
                type="password"
                placeholder="Password"
                required
              />
              <i className="bx bxs-lock-alt absolute right-5 top-1/2 transform -translate-y-1/2 text-xl text-gray-400"></i>
            </div>

            <div className="relative w-full h-[50px] mb-8">
              <input
                className="w-full h-full bg-transparent border-2 border-gray-600 rounded-full text-lg text-white px-5 py-4 pr-[45px] placeholder-gray-400"
                type="password"
                placeholder="Confirm Password"
                required
              />
              <i className="bx bxs-lock-alt absolute right-5 top-1/2 transform -translate-y-1/2 text-xl text-gray-400"></i>
            </div>

            <button
              type="submit"
              className="w-full h-[45px] bg-white text-gray-800 border-none outline-none rounded-full shadow-md cursor-pointer text-base font-semibold"
            >
              Sign Up
            </button>

            <div className="text-sm text-center my-5 text-gray-400">
              <p>
                Already have an account?{" "}
                <a
                  className="text-white font-semibold hover:underline"
                  href="#"
                  onClick={() => navigate("/auth/login")}
                >
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
