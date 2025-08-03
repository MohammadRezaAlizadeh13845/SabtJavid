const Link3 = ({ text = "سلام", size }) => {
  return (
    <div>
      <a
        style={{ fontSize: size }}
        href="#"
        className={` bg-[length:200%_200%] transition-all duration-200  cursor-pointer mr-2 bg-gradient-to-r from-blue-500 to-indigo-800 dark:from-blue-300 dark:to-indigo-500 bg-clip-text text-transparent hover:bg-right-bottom dark:hover:bg-[length:-300%_-300%]`}
      >
        {text}
      </a>
    </div>
  );
};

export default Link3;
