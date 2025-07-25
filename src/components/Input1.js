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
        className={` border border-transparent transition-all duration-200 ease-in-out bg-gray-100 rounded-full px-5 py-2 text-[15px] mb-[1px] text-right dark:bg-slate-900 dark:text-white ${
          error
            ? "border-red-700 dark:border-red-400"
            : correct && form === "signup"
            ? "border-green-600 dark:border-green-400"
            : "border-transparent hover:border-gray-400"
        }`}
      />
    </div>
  );
};

export default Input1;
