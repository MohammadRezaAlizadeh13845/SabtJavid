import { motion } from "framer-motion";
import { useState } from "react";
import Ask from "../assets/images/icons/ask.svg";
import AskHover from "../assets/images/icons/ask-hover.svg";

const AskButton = ({ func }) => {
  const [isHovered, setIsHovered] = useState(false);

  const askFunction = () => {
    func(true);
  };
  return (
    <div>
      <div className="fixed left-5 bottom-5 h-[50px] w-[50px]">
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          whileTap={{
            scale: 0.95,
            transition: { duration: 0.2 },
          }}
          style={{ transformOrigin: "center center" }}
        >
          <button
            style={{ height: "50px", width: "50px", position: "absolute" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={askFunction}
          >
            <img
              src={Ask}
              alt="ask"
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
                !isHovered ? "opacity-100" : "opacity-0"
              }`}
            />
            <img
              src={AskHover}
              alt="ask"
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>
          {/* <img alt="ask" src={Ask} /> */}
        </motion.div>
      </div>
    </div>
  );
};

export default AskButton;
