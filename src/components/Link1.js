import { Link } from "react-router-dom";
const Link1 = ({ text = "سلام", route, size }) => {
  return (
    <div>
      <Link
        to={route}
        className={`border-b-2 transition-colors duration-200 border-transparent hover:border-blue-400 cursor-pointer mr-2 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-300 dark:to-indigo-400 bg-clip-text text-transparent text-${size}`}
      >
        {text}
      </Link>
    </div>
  );
};

export default Link1;
