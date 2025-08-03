import Initial from "../pages/Initial";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import PagesMenu from "./PagesMenu";

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PagesMenu />} />
        <Route path="/initial" element={<Initial />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Pages;
