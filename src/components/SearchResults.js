import SingleResultArticle from "./SingleResultArticle";
import { articles } from "../data/articles";
import { CSSTransition } from "react-transition-group";
import "../styles/transitions.css";
import { useEffect, useState } from "react";

const SearchResults = ({ state, stateFunction, type, results }) => {
  const noResults = type === "no-results";
  const relevantResults = type === "relevant-results";

  const [defaultHidden, setDefaultHidden] = useState(false);
  const [noResultHidden, setNoResultHidden] = useState(false);
  const [relevantResultHidden, setRelevantResultHidden] = useState(false);

  useEffect(() => {
    if (noResults && state) {
      setNoResultHidden(false);
    } else {
      const timer = setTimeout(() => setNoResultHidden(true), 200);
      return () => clearTimeout(timer);
    }
  }, [noResults, state]);

  useEffect(() => {
    if (relevantResults && state) {
      setRelevantResultHidden(false);
    } else {
      const timer = setTimeout(() => setRelevantResultHidden(true), 200);
      return () => clearTimeout(timer);
    }
  }, [relevantResults, state]);

  useEffect(() => {
    if (!noResults && !relevantResults && state) {
      setDefaultHidden(false);
    } else {
      const timer = setTimeout(() => setDefaultHidden(true), 200);
      return () => clearTimeout(timer);
    }
  }, [noResults, relevantResults, state]);

  return (
    <div className="relative ">
      <div
        className={`absolute z-[10] opacity-0 flex flex-col bg-darkBlue dark:bg-slate-800 p-6 rounded-2xl shadow-2xl dark:shadow-black w-full text-right transition-all duration-200 ease-in-out mx-auto h-[400px] overflow-y-auto ${
          state ? "opacity-100" : "opacity-0"
        } ${
          defaultHidden && relevantResultHidden && noResultHidden
            ? "hidden"
            : "block"
        }`}
      >
        <CSSTransition
          in={!noResults && !relevantResults}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <div
            id="default-results"
            className={`transition-all duration-200 ease-in-out ${
              !noResults && !relevantResults ? "opacity-100 " : "opacity-0 "
            } ${defaultHidden ? "hidden" : "block"}`}
          >
            <div
              id="latest"
              className="text-white self-start mr-2 mb-2 text-[17px] md:text-[20px]"
            >
              آخرین مقالات منتشر شده:
            </div>
            {articles.slice(0, 3).map((artice) => (
              <SingleResultArticle
                id={artice.id}
                title={artice.title}
                intro={artice.intro}
                date={artice.date}
                image={artice.image}
                state={state}
                stateFunction={stateFunction}
              />
            ))}
          </div>
        </CSSTransition>
        <CSSTransition
          in={noResults}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <div
            id="no-results"
            className={`transition-all duration-200 ease-in-out ${
              noResults ? "opacity-100 " : "opacity-0 "
            } ${noResultHidden ? "hidden" : "block"}`}
          >
            <div
              id="latest"
              className="text-white self-start mr-2 mb-2 text-[17px] md:hidden mt-[150px]"
            >
              نتیجه ای برای عبارت جست و جو شده یافت نشد.&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            </div>
            <div
              id="latest"
              className="text-white self-start mr-2 mb-2 text-[20px] hidden md:block mt-[150px]"
            >
              نتیجه ای برای عبارت جست و جو شده یافت نشد.&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </CSSTransition>
        <CSSTransition
          in={relevantResults}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <div id="relevant-results">
            <div
              className={`z-[10] opacity-0 flex flex-col justify-center items-center  w-full text-right transition-all duration-200 ease-in-out mx-auto mb-5 ${
                relevantResults && state ? "opacity-100" : "opacity-0"
              } ${relevantResultHidden ? "hidden" : "block"}`}
            >
              <div
                id="results"
                className="text-white self-start mr-2 mb-2 text-[17px] md:text-[20px]"
              >
                نتایج جست و جو:
              </div>
              {results.map((article) => (
                <SingleResultArticle
                  key={article.id}
                  id={article.id}
                  title={article.title}
                  intro={article.intro}
                  date={article.date}
                  image={article.image}
                  state={state}
                  stateFunction={stateFunction}
                ></SingleResultArticle>
              ))}
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default SearchResults;
