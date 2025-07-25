const Button1 = ({ onClick, text }) => {
  return (
    <button
      className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-800 dark:from-blue-500 dark:to-indigo-700 bg-[length:200%_200%] bg-left-top text-white rounded-full hover:bg-right-bottom transition-all duration-200 ease-in-out w-1/2 mx-auto dark:text-slate-900"
      type="submit"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button1;
