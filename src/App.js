import "./styles/App.css";
import LoginForm from "./components/LoginForm";
import Logo from "./components/Logo";
import { Route, Routes } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";

function App() {
  const localHost =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";
  const BaseURL = localHost
    ? "http://localhost:5000"
    : "http://192.168.1.103:5000";
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <div className="flex flex-row justify-center mb-5 ">
        <Logo width={"150px"} height={"75px"} />
      </div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </div>
  );
}

export default App;
