import SingleResultArticle from "../components/SingleResultArticle";
import { useState } from "react";
import { articles } from "../data/articles";
const ArticlesPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    articles.slice(0, 5),
    articles.slice(5, 10),
    articles.slice(10, 15),
    articles.slice(15, 18),
  ];

  return (
    <div className="w-[80%] upmd:w-[60%] mx-auto flex flex-col items-center mt-10">
      <div id="slides" className="mb-5">
        {slides.map((group, index) => (
          <div
            key={index}
            style={{ display: index === activeIndex ? "block" : "none" }}
            className="flex flex-col bg-white  p-6 rounded-2xl shadow-2xl w-full text-right transition-all duration-200 ease-in-out"
          >
            {group.map((article) => (
              <SingleResultArticle
                id={article.id}
                title={article.title}
                intro={article.intro}
                date={article.date}
                image={article.image}
              />
            ))}
          </div>
        ))}
      </div>
      <div id="dots" className="flex gap-2 mb-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full hover:bg-cherryRed transition-all duration-200 ${
              index === activeIndex ? "bg-darkBlue" : "bg-gray-400 "
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
