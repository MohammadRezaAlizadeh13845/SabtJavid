import { useParams } from "react-router-dom";
import { articles } from "../data/articles";

const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id.toString() === id);
  return (
    <div>
      <div
        className={`mt-10 mb-10 w-[80%] upmd:w-[60%] z-[11] flex flex-col justify-center items-center bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] dark:shadow-black text-right transition-all duration-200 ease-in-out mx-auto`}
      >
        <div
          id="photo-title"
          className=" flex flex-row w-full justify-center items-center"
        >
          <div id="title" className="ml-[25px] text-[17px] md:text-[25px]">
            <h1>{article.title}</h1>
          </div>
          <div id="photo" className="flex-shrink-0">
            <img
              alt="article"
              src={article.image}
              className="w-[100px] h-[100px] md:h-[200px] md:w-[200px]"
            />
          </div>
        </div>
        <div id="content-intro" className=" p-6">
          {article.content}
        </div>
        <div id="date" className="p-6 w-full">
          تاریخ انتشار: {article.date}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
