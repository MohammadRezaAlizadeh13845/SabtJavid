import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import ArticlesPage from "./pages/ArticlesPage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <header className="w-full">
        <NavBar />
        <SearchBar />
      </header>

      <Routes>
        <Route path="/SabtJavid/" element={<Home />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
