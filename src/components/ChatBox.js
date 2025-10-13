import Send from "../assets/images/icons/send.svg";
import SendHover from "../assets/images/icons/send-hover.svg";
import { useState, useEffect, useRef } from "react";

const ChatBox = ({ state, stateSetter }) => {
  const [isHovered, setIsHovered] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const [messages, setMessages] = useState([]);

  const [hidden, setHidden] = useState(!state);

  const chatBoxRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (chatBoxRef.current && !chatBoxRef.current.contains(event.target)) {
        stateSetter(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (state) {
      setHidden(false);
    } else {
      const timer = setTimeout(() => setHidden(true), 200);
      return () => clearTimeout(timer);
    }
  }, [state]);

  const sendFunction = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendFunction();
  };
  return (
    <div
      className={`z-[9999] fixed left-4 -bottom-2 opacity-100 transition-all duration-200 ${
        state ? "opacity-100" : "opacity-0"
      } ${hidden ? "hidden" : "block"}`}
      onMouseLeave={() => stateSetter(false)}
    >
      <div
        ref={chatBoxRef}
        className={`w-[250px] flex flex-col justify-end items-center bg-white p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)]  text-right transition-all duration-200 ease-in-out mx-auto mb-5 h-[300px] ${
          state ? "opacity-100" : "opacity-0"
        } ${hidden ? "hidden" : "block"}`}
      >
        <div id="messages" className="overflow-y-auto rounded-lg">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`w-[190px] h-auto min-h-[50px] z-[15] flex flex-row justify-start items-center bg-darkBlue p-5 rounded-2xl text-right transition-all duration-200 ease-in-out mx-auto mb-5 break-words whitespace-normal text-white [overflow-wrap:anywhere]`}
            >
              {msg}
            </div>
          ))}
        </div>

        <div
          className={`w-[190px] min-h-[50px] z-[15] flex flex-row justify-start items-center bg-white px-5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] text-right transition-all duration-200 ease-in-out mx-auto mb-5`}
        >
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            className="w-full focus:outline-none focus:ring-0 focus:shadow-none"
            placeholder="سوالی دارید؟"
          />
          <button
            style={{ height: "30px", width: "30px", position: "relative" }}
            className="mr-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={sendFunction}
          >
            <img
              src={Send}
              alt="send"
              className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-200 ${
                !isHovered ? "opacity-100" : "opacity-0"
              }`}
            />
            <img
              src={SendHover}
              alt="sends"
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
