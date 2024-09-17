import { useLocation } from "react-router-dom";
import Login from "./components/sign-in";
import Signup from "./components/sign-up";
import "@/styles/global.css";

const App = () => {
  const location = useLocation();
  console.log("????????", useLocation());

  if (location?.pathname === "/auth/login") {
    return <Login />;
  } else if (location?.pathname === "/auth/signup") {
    return <Signup />;
  }

  return <div>{"hello world"}</div>;
};

export default App;
