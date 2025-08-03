import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import PagesMenu from "./components/PagesMenu";
import Home from "./pages/Home";
import Initial from "./pages/Initial";

function App() {
  const localHost =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";
  const BaseURL = localHost
    ? "http://localhost:5000"
    : "http://192.168.1.103:5000";
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Routes>
        <Route path="/" element={<PagesMenu />} />
        <Route path="/initial" element={<Initial />} />
        <Route path="/signup" element={<Initial />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
