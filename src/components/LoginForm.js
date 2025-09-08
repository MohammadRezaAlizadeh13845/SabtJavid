import { useState, useEffect } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import Button1 from "./Button1";
import Input1 from "./Input1";
import ErrorMessage from "./ErrorMessage";
import ModeToggle from "./ModeToggle";
import Link2 from "./Link2";
import Logo1 from "./Logo1";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formValues, setFormValues] = useState({
    insurance: "",
    firstname: "",
    lastname: "",
    phone: "",
    gender: "",
    birthdate: "",
    email: "",
    password: "",
  });

  const [formErrorMessages, setFormErrorMessages] = useState({
    insurance: "",
    firstname: "",
    lastname: "",
    phone: "",
    gender: "",
    birthdate: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    insurance: false,
    firstname: false,
    lastname: false,
    phone: false,
    gender: false,
    birthdate: false,
    email: false,
    password: false,
  });

  const [formCorrects, setFormCorrects] = useState({
    insurance: false,
    firstname: false,
    lastname: false,
    phone: false,
    gender: false,
    birthdate: false,
    email: false,
    password: false,
  });

  const [formTouched, setFormTouched] = useState({
    firstname: false,
    lastname: false,
    phone: false,
    gender: false,
    birthdate: false,
    insurance: false,
    email: false,
    password: false,
  });

  const patterns = {
    firstname: "^[A-Za-zآ-ی]+$",
    lastname: "^[A-Za-zآ-ی]+$",
    phone: "^09[0-9]{9}$",
    email: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
    password: "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[^a-zA-Z0-9]).{8,}$",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const rawValue = typeof value === "string" ? value.trim() : value;

    setFormValues((prev) => ({
      ...prev,
      [name]: rawValue,
    }));

    if (
      (typeof rawValue === "string" && rawValue === "") ||
      (typeof rawValue === "object" && !rawValue)
    ) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: true,
      }));
      setFormErrorMessages((prev) => ({
        ...prev,
        [name]: "پر کردن این فیلد الزامی است.",
      }));
    } else {
      setFormErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
      setFormErrorMessages((prev) => ({
        ...prev,
        [name]: "",
      }));
      setFormCorrects((prev) => ({
        ...prev,
        [name]: true,
      }));
    }
  };
  useEffect(() => {
    Object.keys(formTouched).forEach((field) => {
      if (formTouched[field]) {
        const value = formValues[field];
        if (value.trim() === "") {
          setFormErrors((prev) => ({ ...prev, [field]: true }));
          setFormErrorMessages((prev) => ({
            ...prev,
            [field]: "پر کردن این فیلد الزامی است.",
          }));
        } else {
          setFormErrors((prev) => ({ ...prev, [field]: false }));
          setFormErrorMessages((prev) => ({ ...prev, [field]: "" }));
          setFormCorrects((prev) => ({ ...prev, [field]: true }));
        }
      }
    });
  }, [formTouched, formValues]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const allvalid = Object.values(formCorrects).every(
      (value) => value === true
    );

    if (!allvalid) {
      setFormTouched((prev) => {
        const touched = {};
        for (let key in prev) touched[key] = true;
        return touched;
      });

      setFormErrors((prev) => {
        const error = {};
        for (let key in prev) error[key] = true;
        return error;
      });

      //form submission happens here

      return;
    }
  };
  const [isDarkMode, setIsDarkMode] = useState(
    document.body.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.body.classList.contains("dark"));
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);
  return (
    <div>
      <div className="flex flex-row justify-center mb-3">
        <Logo1 width={"150px"} height={"75px"} />
      </div>
      <form className="flex flex-col justify-center items-center bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl dark:shadow-black w-full max-w-md text-right transition-all duration-200 ease-in-out mx-auto my-auto">
        <h1 className="text-3xl text-darkBlue dark:text-lightBlue mb-[5px] transition-all duration-200 ease-in-out">
          ورود
        </h1>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 mb-[30px] dark:from-blue-300 dark:to-indigo-400 transition-all duration-200 ease-in-out">
          خوش اومدی!
        </p>
        <div>
          <Input1
            form={"login"}
            type={"email"}
            inputName={"email"}
            placeholder={"ایمیل"}
            pattern={patterns.email}
            value={formValues.email}
            handleChange={handleChange}
            error={formErrors.email}
            correct={formCorrects.email}
          ></Input1>
          <ErrorMessage errorMessage={formErrorMessages.email}></ErrorMessage>
        </div>
        <div className="relative">
          <Input1
            form={"login"}
            type={"password"}
            inputName={"password"}
            placeholder={"رمز عبور"}
            pattern={patterns.password}
            value={formValues.password}
            handleChange={handleChange}
            error={formErrors.password}
            correct={formCorrects.password}
          ></Input1>
          <ErrorMessage
            errorMessage={formErrorMessages.password}
          ></ErrorMessage>

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-[180px] top-[20px] -translate-y-1/2 cursor-pointer text-gray-400"
          >
            {showPassword ? (
              <EyeSlashIcon className="w-5 h-5" />
            ) : (
              <EyeIcon className="w-5 h-5" />
            )}
          </span>
        </div>

        <Button1 text={"ورود"} onClick={handleSubmit} />
        <div className="flex flex-row justify-center text-sm text-gray-500 dark:text-gray-400 mt-2 mb-6">
          <h2>هنوز ثبت نام نکردی؟</h2>
          <Link2 text={"ثبت نام"} value={true} />
        </div>
        <div className="flex flex-row ">
          <ModeToggle />
          <div className="relative">
            <p
              className={`absolute inset-0 w-full h-full object-contain text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 mb-[30px] dark:from-blue-300 dark:to-indigo-400 transition-all duration-200 ease-in-out mr-2 mt-1 ${
                isDarkMode ? "opacity-0" : "opacity-100"
              }`}
            >
              حالت تاریک🌙
            </p>
            <p
              className={` text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 mb-[30px] dark:from-blue-300 dark:to-indigo-400 transition-all duration-200 ease-in-out mr-2 mt-1 ${
                isDarkMode ? "opacity-100" : "opacity-0"
              }`}
            >
              حالت روشن☀️
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
