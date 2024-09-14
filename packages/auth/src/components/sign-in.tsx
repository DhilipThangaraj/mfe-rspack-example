import "@/styles/global.css";

import bgImage from "@/styles/assets/login-bg.jpg";

function Login() {
  return (
    <>
      <div
        className="flex justify-end items-center min-h-screen bg-cover bg-center bg-blue-500"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="w-[420px] mr-24 bg-transparent backdrop-blur-lg shadow-lg text-white rounded-lg p-8 border-2 border-white/20">
          <form>
            <h1 className="text-4xl text-center mb-8">Login</h1>

            <div className="relative w-full h-[50px] mb-8">
              <input
                className="w-full h-full bg-transparent border-2 border-white/20 rounded-full text-lg text-white px-5 py-4 pr-[45px] placeholder-white"
                type="text"
                placeholder="Username"
                required
              />
              <i className="bx bxs-user absolute right-5 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>
            <div className="relative w-full h-[50px] mb-8">
              <input
                className="w-full h-full bg-transparent border-2 border-white/20 rounded-full text-lg text-white px-5 py-4 pr-[45px] placeholder-white"
                type="password"
                placeholder="Password"
                required
              />
              <i className="bx bxs-lock-alt absolute right-5 top-1/2 transform -translate-y-1/2 text-xl"></i>
            </div>
            <div className="flex justify-between text-sm mb-4">
              <label>
                <input className="accent-white mr-1" type="checkbox" /> Remember
                me
              </label>
              <a className="text-white hover:underline" href="#">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full h-[45px] bg-white border-none outline-none rounded-full shadow-md cursor-pointer text-base text-gray-800 font-semibold"
            >
              Login
            </button>
            <div className="text-sm text-center my-5">
              <p>
                Don't have an account?{" "}
                <a
                  className="text-white font-semibold hover:underline"
                  href="#"
                >
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
