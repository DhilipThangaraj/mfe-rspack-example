import "@/styles/global.css";
// import bgImage from "@/styles/assets/login-bg.jpg";

function Login() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="w-[420px] bg-gray-800 shadow-lg text-white rounded-lg p-8 border-2 border-gray-700">
          <form>
            <h1 className="text-4xl text-center mb-8 text-white">Login</h1>

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
                type="password"
                placeholder="Password"
                required
              />
              <i className="bx bxs-lock-alt absolute right-5 top-1/2 transform -translate-y-1/2 text-xl text-gray-400"></i>
            </div>
            <div className="flex justify-between text-sm mb-4 text-gray-400">
              <label>
                <input className="accent-gray-600 mr-1" type="checkbox" />{" "}
                Remember me
              </label>
              <a className="text-gray-400 hover:underline" href="#">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full h-[45px] bg-white text-gray-800 border-none outline-none rounded-full shadow-md cursor-pointer text-base font-semibold"
            >
              Login
            </button>
            <div className="text-sm text-center my-5 text-gray-400">
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
