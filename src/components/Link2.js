import { useAuth } from "../context/AuthContext";
//this one is only applicable for signup and login page.
const Link2 = ({ text = "سلام", value }) => {
  const { setIsSignUp } = useAuth();
  return (
    <div>
      <a
        href="#"
        className={`border-b-2 transition-colors duration-200 border-transparent hover:border-blue-400 cursor-pointer mr-2 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-300 dark:to-indigo-400 bg-clip-text text-transparent`}
        onClick={(e) => {
          e.preventDefault();
          setIsSignUp(value);
        }}
      >
        {text}
      </a>
    </div>
  );
};

export default Link2;
