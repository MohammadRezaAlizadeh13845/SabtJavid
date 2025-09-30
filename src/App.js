import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import ArticlesPage from "./pages/ArticlesPage";
import FinancialPage from "./pages/FinancialArticlesPage";
import LegalPage from "./pages/LegalArticlesPage";
import RegistrationPage from "./pages/RegistrationArticlesPage";
import ImmigrationPage from "./pages/ImmigrationArticlesPage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen">
      <header className="w-full">
        <NavBar />
        <SearchBar />
      </header>
      <ScrollToTop />
      <Routes>
        <Route path="/SabtJavid/" element={<Home />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/financialarticles" element={<FinancialPage />} />
        <Route path="/immigrationarticles" element={<ImmigrationPage />} />
        <Route path="/registrationarticles" element={<RegistrationPage />} />
        <Route path="/legalarticles" element={<LegalPage />} />
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
