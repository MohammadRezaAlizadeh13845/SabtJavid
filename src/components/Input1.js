const Input1 = ({
  form,
  type,
  placeholder,
  inputName,
  pattern,
  value,
  handleChange,
  handleFocus,
  handleBlur,
  error,
  correct,
  isDarkMode,
  isHovered,
}) => {
  return (
    <div>
      <input
        name={inputName}
        type={type}
        pattern={pattern}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`
    border transition-all duration-200 ease-in-out bg-gray-100 rounded-full 
    px-5 py-2 text-[15px] mb-[1px] text-right dark:bg-slate-900 dark:text-white 
    hover:border-gray-400
  `}
        style={{
          borderColor: error
            ? isDarkMode
              ? "#E53935"
              : "#EF5350"
            : correct && form === "signup"
            ? isDarkMode
              ? "#43A047"
              : "#66BB6A"
            : isHovered
            ? "#9CA3AF"
            : "transparent",
        }}
      />
    </div>
  );
};

export default Input1;
