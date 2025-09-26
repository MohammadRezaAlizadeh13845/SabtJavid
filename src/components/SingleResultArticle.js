import image4712 from "../assets/images/articles/1.jpg";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SingleResultArticle = ({
  stateFunction = (prev) => (prev = prev * 1),
  state = true,
  id = 1,
  title = "شرایط و مراحل ثبت شرکت در تهران",
  intro = "ثبت شرکت در تهران یکی از مراحل مهم برای شروع کسب‌وکار قانونی است.           دانستن مراحل دقیق و شرایط قانونی قبل از اقدام، می‌تواند از صرف زمان و هزینهٔ اضافی جلوگیری کند.",
  date = "2025/08/03",
  image = image4712,
}) => {
  const [isTitleHovered, setIsTitleHovered] = useState(false);
  const [isContinueHovered, setIsContinueHovered] = useState(false);

  const navigate = useNavigate();

  const showArticle = () => {
    navigate(`/article/${id}`);
    stateFunction(!state);
  };
  return (
    <div
      className={`w-full z-[11] flex flex-row justify-center items-center bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] dark:shadow-black text-right transition-all duration-200 ease-in-out mx-auto mb-5 h-[400px] md:h-[300px]`}
    >
      <div className="hidden md:flex">
        <div
          id="text"
          className="text-black dark:text-white  flex-col max-w-[70%] h-[150px] "
        >
          <div
            id="title"
            className="mb-3 w-fit  cursor-pointer"
            onMouseEnter={() => {
              setIsTitleHovered(true);
            }}
            onMouseLeave={() => {
              setIsTitleHovered(false);
            }}
            onClick={showArticle}
          >
            <h1
              className={`text-[20px] transition-all duration-200 ${
                isTitleHovered
                  ? "text-cherryRed "
                  : "text-black dark:text-white"
              }`}
            >
              {title}
            </h1>
            <div
              className={`rounded-full h-1 mt-1 bg-cherryRed opacity-0 transition-all duration-200 ${
                isTitleHovered ? "opacity-100" : "opacity-0"
              }`}
            ></div>
          </div>
          <div id="intro" className="text-[15px]  pl-5">
            {intro}
          </div>
          <div id="continue-date" className=" flex flex-row relative mt-2">
            <div
              id="continue"
              className={`text-[15px] mt-1 cursor-pointer w-fit transition-all duration-200 ${
                isContinueHovered
                  ? "text-cherryRed"
                  : "text-black dark:text-white"
              }`}
              onMouseEnter={() => {
                setIsContinueHovered(true);
              }}
              onMouseLeave={() => {
                setIsContinueHovered(false);
              }}
              onClick={showArticle}
            >
              <div>ادامه مطلب{">>"}</div>
              <div
                className={`rounded-full h-[2px] bg-cherryRed opacity-0 transition-all duration-200 ${
                  isContinueHovered ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </div>
            <div id="date" className="left-10 absolute">
              تاریخ انتشار: {date}
            </div>
          </div>
        </div>
        <div id="photo" className="cursor-pointer flex-shrink-0">
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.3 },
            }}
            onClick={showArticle}
          >
            <img src={image} className="w-[150px] h-[150px]" alt="img" />
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col md:hidden">
        <div id="image-title" className="flex flex-row self-center">
          <div
            id="title"
            className="mb-3 w-fit cursor-pointer ml-5 self-center"
            onMouseEnter={() => {
              setIsTitleHovered(true);
            }}
            onMouseLeave={() => {
              setIsTitleHovered(false);
            }}
            onClick={showArticle}
          >
            <h1
              className={`text-[17px] transition-all duration-200  ${
                isTitleHovered
                  ? "text-cherryRed "
                  : "text-black dark:text-white"
              }`}
            >
              {title}
            </h1>
            <div
              className={`rounded-full h-1 mt-1 bg-cherryRed opacity-0 transition-all duration-200 ${
                isTitleHovered ? "opacity-100" : "opacity-0"
              }`}
            ></div>
          </div>
          <div id="photo" className="cursor-pointer flex-shrink-0">
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.3 },
              }}
              onClick={showArticle}
            >
              <img src={image} className="w-[100px] h-[100px]" alt="img" />
            </motion.div>
          </div>
        </div>
        <div id="text-continue-date" className=" w-full flex flex-col">
          <div
            id="intro"
            className="text-[13px] md:text-[15px] text-black dark:text-white w-full mt-5"
          >
            {intro}
          </div>
          <div className="flex flex-col relative mt-2">
            <div
              id="continue"
              className={`text-[15px] mt-1 cursor-pointer w-fit transition-all duration-200  ${
                isContinueHovered
                  ? "text-cherryRed"
                  : "text-black dark:text-white"
              }`}
              onMouseEnter={() => {
                setIsContinueHovered(true);
              }}
              onMouseLeave={() => {
                setIsContinueHovered(false);
              }}
              onClick={showArticle}
            >
              <div>ادامه مطلب{">>"}</div>
              <div
                className={`rounded-full h-[2px] bg-cherryRed opacity-0 transition-all duration-200 ${
                  isContinueHovered ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </div>
            <div
              id="date"
              className="mt-1 -ml-5 upsm:ml-0 upsm:absolute upsm:left-10 text-black dark:text-white mt-2 upsm:mt-0"
            >
              تاریخ انتشار: {date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleResultArticle;
