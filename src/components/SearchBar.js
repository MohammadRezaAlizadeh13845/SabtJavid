import { useState, useEffect, useRef } from "react";
import DarkSearch from "../assets/images/icons/search-dark.svg";
import HoverSearch from "../assets/images/icons/search-hover.svg";
import SearchResults from "./SearchResults";
import { OrbitProgress } from "react-loading-indicators";
import { articles } from "../data/articles";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const [results, setResults] = useState([]);

  const [resultType, setResultType] = useState("default");

  const location = useLocation();

  useEffect(() => {
    setQuery("");
  }, [location.pathname]);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setResults([]);
      setResultType("default");
      return;
    }

    const words = searchQuery.toLowerCase().split(/\+s/);
    const matches = articles.filter((article) =>
      words.some((word) => article.title.toLowerCase().includes(word))
    );

    if (matches.length === 0) {
      setResultType("no-results");
      setResults([]);
    } else {
      setResultType("relevant-results");
      setResults(matches);
    }
  }, [searchQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(query);
    setSearching(true);
    setTimeout(() => setSearching(false), 500);
  };

  const containerRef = useRef(null);

  const [searching, setSearching] = useState(false);

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div ref={containerRef} className="w-[80%] upmd:w-[60%] mx-auto">
      <div
        id="searchbar"
        className={`self-center z-[1] mt-5 relative flex flex-row justify-center items-start bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl dark:shadow-black w-full text-right transition-all duration-200 ease-in-out mx-auto mb-2 border-2 border-[#b7bcc5] hover:border-gray-500 dark:hover:border-white h-[50px] ${
          isFocused ? "border-gray-500 dark:border-white" : "border-[#b7bcc5]"
        }`}
      >
        <form onSubmit={handleSubmit} className="w-full">
          <div id="search button">
            <button
              type="submit"
              style={{
                width: "35px",
                height: "40px",
                position: "absolute",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="left-3 top-1"
            >
              <div
                className={`scale-[0.50] absolute -top-4 -left-4 opacity-0 transition-all duration-200 ${
                  searching ? "opacity-100" : "opacity-0"
                }`}
              >
                <OrbitProgress dense color="rgb(154,14,14)" size="small" />
              </div>
              <div
                id="search-icon"
                className={`transition-all duration-200 ${
                  searching ? "opacity-0" : "opacity-100"
                }`}
              >
                <img
                  src={DarkSearch}
                  alt="navbar"
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 opacity-100 ${
                    !isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />
                <img
                  src={HoverSearch}
                  alt="navbar"
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            </button>
          </div>
          <div id="input" className="-mt-[16px] -mr-[5px] w-[90%]">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  setSearchQuery(query);
                  setSearching(true);
                  setTimeout(() => setSearching(false), 500);
                }
              }}
              onFocus={() => setIsFocused(true)}
              className="w-full border-none outline-none ring-0 text-xl placeholder-gray-500 placeholder:text-[18px] transition-all duration-200 focus:outline-none focus:ring-0 focus:shadow-none text-black  "
              placeholder="جست و جو"
            ></input>
          </div>
        </form>
      </div>

      <SearchResults
        state={isFocused}
        stateFunction={setIsFocused}
        type={resultType}
        results={results}
      />
    </div>
  );
};

export default SearchBar;
