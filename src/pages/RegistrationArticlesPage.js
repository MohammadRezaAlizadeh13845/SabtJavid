import SingleResultArticle from "../components/SingleResultArticle";
import { articles } from "../data/articles";
const RegistrationArticlesPage = () => {
  const slides = [articles.slice(18, 22)];

  return (
    <div className="w-[80%] upmd:w-[60%] mx-auto flex flex-col items-center mt-10">
      <div id="slides" className="mb-5">
        {slides.map((group, index) => (
          <div
            key={index}
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
    </div>
  );
};

export default RegistrationArticlesPage;
