import { useState, useEffect } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import Button1 from "./Button1";
import Input1 from "./Input1";
import ErrorMessage from "./ErrorMessage";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Select from "react-select";
import { components } from "react-select";
import ModeToggle from "./ModeToggle";
import Logo from "./Logo";
import ModeText from "./ModeText";
import Link2 from "./Link2";

import AlborzLogo from "../assets/images/Preview22.svg";
import IranLogo from "../assets/images/لوگو-بیمه-ایران.svg";
import TaminLogo from "../assets/images/tamin.svg";
import RaziLogo from "../assets/images/Untitled55.svg";
import MaleLogo from "../assets/images/man1.svg";
import FemaleLogo from "../assets/images/woman1.svg";
import CloseLogo from "../assets/images/close2.svg";

const insuranceOptions = [
  {
    value: "alborz",
    label: "البرز",
    icon: AlborzLogo,
  },
  {
    value: "tamin",
    label: "تامین اجتماعی",
    icon: TaminLogo,
  },
  {
    value: "razi",
    label: "رازی",
    icon: RaziLogo,
  },
  {
    value: "iran",
    label: "ایران",
    icon: IranLogo,
  },
  {
    value: "nooption",
    label: "بیمه ندارم.",
    icon: CloseLogo,
  },
];

const genderOptions = [
  {
    value: "male",
    label: "آقا",
    icon: MaleLogo,
  },
  {
    value: "female",
    label: "خانم",
    icon: FemaleLogo,
  },
];

const optionsMap = {
  insurance: insuranceOptions,
  gender: genderOptions,
};

const CustomOption = (props) => {
  const { data, innerRef, innerProps } = props;
  return (
    <div
      ref={innerRef}
      {...innerProps}
      className="flex flex-row items-center gap-2 px-4 py-2 rounded-[5px] hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer"
    >
      <img src={data.icon} alt={data.label} className="w-[20px] h-[20px]" />
      <span>{data.label}</span>
    </div>
  );
};

const CustomSingleValue = ({ data, ...props }) => (
  <components.SingleValue {...props}>
    <div className="flex flex-row justify-start  dark:text-whit ">
      <img
        src={data.icon}
        alt={data.label}
        className="w-[20px] h-[20px] ml-[5px]"
      />
      <span>{data.label}</span>
    </div>
  </components.SingleValue>
);

const SignUpForm = () => {
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

  const [formFocused, setFormFocused] = useState({
    insurance: false,
    firstname: false,
    lastname: false,
    phone: false,
    gender: false,
    birthdate: false,
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

  const handleBlur = (e) => {
    const { name } = e.target;
    setFormTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
    setFormFocused((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  const handleBlurSelect = (name) => {
    if (!formValues[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: true,
      }));
      setFormCorrects((prev) => ({
        ...prev,
        [name]: false,
      }));
      setFormErrorMessages((prev) => ({
        ...prev,
        [name]: "پر کردن این فیلد الزامی است.",
      }));
    } else {
      setFormErrors((prev) => ({ ...prev, [name]: false }));
      setFormCorrects((prev) => ({ ...prev, [name]: true }));
      setFormErrorMessages((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setFormFocused((prev) => ({
      ...prev,
      [name]: true,
    }));
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
    } else if (
      typeof rawValue === "string" &&
      patterns[name] &&
      !new RegExp(patterns[name]).test(rawValue)
    ) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: true,
      }));
      setFormErrorMessages((prev) => ({
        ...prev,
        [name]: errorMessages[name],
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
        } else if (
          patterns[field] &&
          !new RegExp(patterns[field]).test(value)
        ) {
          setFormErrors((prev) => ({ ...prev, [field]: true }));
          setFormErrorMessages((prev) => ({
            ...prev,
            [field]: errorMessages[field],
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

  const errorMessages = {
    firstname: "نام فقط باید شامل حروف باشد.",
    lastname: "نام خانوادگی فقط باید شامل حروف باشد.",
    phone: "شماره همراه باید مانند *********09 باشد.",
    email: "ایمیل باید مانند ali123@gmail.com باشد.",
    password: "رمز عبور باید مانند Ali@123 باشد.",
  };

  const [isHovered, setIsHovered] = useState({
    firstname: false,
    lastname: false,
    phone: false,
    birthdate: false,
    gender: false,
    insurance: false,
    email: false,
    password: false,
  });

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

  const selectedElementOption = (name) => {
    optionsMap[name].find((opt) => opt.value === formValues[name]);
  };

  return (
    <div>
      <div className="flex flex-row justify-center mb-3">
        <Logo width={"150px"} height={"75px"} />
      </div>
      <form className="flex flex-col justify-center items-center bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl dark:shadow-black w-full max-w-md md:max-w-lg text-right transition-all duration-200 ease-in-out mx-auto mb-5">
        <h1 className="text-3xl text-darkBlue dark:text-lightBlue mb-[5px] transition-all duration-200 ease-in-out">
          ثبت نام
        </h1>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 mb-[30px] dark:from-blue-300 dark:to-indigo-400 transition-all duration-200 ease-in-out">
          اولین قدم رو برای حالِ خوب بردار.
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="md:ml-5">
            <div>
              <div
                onMouseEnter={() =>
                  setIsHovered((prev) => ({ ...prev, firstname: true }))
                }
                onMouseLeave={() =>
                  setIsHovered((prev) => ({ ...prev, firstname: false }))
                }
              >
                <Input1
                  form={"signup"}
                  type={"text"}
                  inputName={"firstname"}
                  placeholder={"نام"}
                  pattern={patterns.firstname}
                  value={formValues.firstname}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  handleFocus={handleFocus}
                  error={formErrors.firstname}
                  correct={formCorrects.firstname}
                  isDarkMode={isDarkMode}
                  isHovered={isHovered.firstname}
                ></Input1>
              </div>
              <div>
                <ErrorMessage
                  errorMessage={formErrorMessages.firstname}
                ></ErrorMessage>
              </div>
            </div>
            <div>
              <div
                onMouseEnter={() =>
                  setIsHovered((prev) => ({ ...prev, lastname: true }))
                }
                onMouseLeave={() =>
                  setIsHovered((prev) => ({ ...prev, lastname: false }))
                }
              >
                <Input1
                  form={"signup"}
                  type={"text"}
                  inputName={"lastname"}
                  placeholder={"نام خانوادگی"}
                  pattern={patterns.lastname}
                  value={formValues.lastname}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  handleFocus={handleFocus}
                  error={formErrors.lastname}
                  correct={formCorrects.lastname}
                  isDarkMode={isDarkMode}
                  isHovered={isHovered.lastname}
                ></Input1>
              </div>
              <div>
                <ErrorMessage
                  errorMessage={formErrorMessages.lastname}
                ></ErrorMessage>
              </div>
            </div>
            <div>
              <div
                onMouseEnter={() =>
                  setIsHovered((prev) => ({ ...prev, phone: true }))
                }
                onMouseLeave={() =>
                  setIsHovered((prev) => ({ ...prev, phone: false }))
                }
              >
                <Input1
                  form={"signup"}
                  type={"tel"}
                  inputName={"phone"}
                  placeholder={"شماره همراه"}
                  pattern={patterns.phone}
                  value={formValues.phone}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  handleFocus={handleFocus}
                  error={formErrors.phone}
                  correct={formCorrects.phone}
                  isDarkMode={isDarkMode}
                  isHovered={isHovered.phone}
                ></Input1>
              </div>
              <div>
                <ErrorMessage
                  errorMessage={formErrorMessages.phone}
                ></ErrorMessage>
              </div>
            </div>
            <div>
              <div
                className=" cursor-pointer "
                onMouseEnter={() =>
                  setIsHovered((prev) => ({ ...prev, birthdate: true }))
                }
                onMouseLeave={() =>
                  setIsHovered((prev) => ({ ...prev, birthdate: false }))
                }
              >
                <DatePicker
                  name="birthdate"
                  placeholder="تاریخ تولد"
                  calendar={persian}
                  locale={persian_fa}
                  value={formValues.birthdate}
                  calendarPosition="bottom-left"
                  inputClass={`border transition-colors duration-200 ease-in-out rounded-full 
                bg-gray-100 dark:bg-slate-900 dark:text-white px-2 py-[6px] pr-5
                hover:border-gray-400
                `}
                  style={{
                    borderColor: formErrors.birthdate
                      ? isDarkMode
                        ? "#E53935"
                        : "#EF5350"
                      : formCorrects.birthdate
                      ? isDarkMode
                        ? "#43A047"
                        : "#66BB6A"
                      : isHovered.birthdate
                      ? "#9CA3AF"
                      : "transparent",
                  }}
                  disableDayPicker={false}
                  onlyShowInRange={false}
                  format="YYYY/MM/DD"
                  onChange={(value) => {
                    setFormValues((prev) => ({
                      ...prev,
                      birthdate: value?.format?.("YYYY/MM/DD") || "",
                    }));
                  }}
                  onClose={() => {
                    if (formValues.birthdate === "") {
                      setFormErrors((prev) => ({
                        ...prev,
                        birthdate: true,
                      }));
                      setFormErrorMessages((prev) => ({
                        ...prev,
                        birthdate: "پر کردن این فیلد الزامی است.",
                      }));
                      setFormCorrects((prev) => ({
                        ...prev,
                        birthdate: false,
                      }));
                    } else {
                      setFormErrors((prev) => ({
                        ...prev,
                        birthdate: false,
                      }));
                      setFormErrorMessages((prev) => ({
                        ...prev,
                        birthdate: "",
                      }));
                      setFormCorrects((prev) => ({
                        ...prev,
                        birthdate: true,
                      }));
                    }
                  }}
                />
              </div>
              <div>
                <ErrorMessage
                  errorMessage={formErrorMessages.birthdate}
                ></ErrorMessage>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div
                onMouseEnter={() =>
                  setIsHovered((prev) => ({ ...prev, insurance: true }))
                }
                onMouseLeave={() =>
                  setIsHovered((prev) => ({ ...prev, insurance: false }))
                }
              >
                <Select
                  name="insurance"
                  options={insuranceOptions}
                  components={{
                    Option: CustomOption,
                    SingleValue: CustomSingleValue,
                  }}
                  placeholder="بیمه ی تکمیلی"
                  value={selectedElementOption("insurance")}
                  onChange={(selectedOption) => {
                    handleChange({
                      target: {
                        name: "insurance",
                        value: selectedOption.value,
                      },
                    });
                  }}
                  onBlur={() => handleBlurSelect("insurance")}
                  styles={{
                    control: (base, state) => ({
                      ...base,
                      backgroundColor: isDarkMode ? "#0f172a" : "#f3f4f6",
                      borderRadius: "9999px",
                      borderColor: `${
                        formErrors.insurance
                          ? isDarkMode
                            ? "#dc2626"
                            : "#fa4444ff"
                          : formCorrects.insurance
                          ? isDarkMode
                            ? "#4ade80"
                            : "#16a34a"
                          : isHovered.insurance
                          ? "#9CA3AF"
                          : "transparent"
                      }`,
                      padding: "2px 12px",
                      fontSize: "0.875rem",
                      boxShadow: "none",
                      outline: "none",
                      width: "222px",
                      "&:hover": {
                        borderColor: formErrors.insurance
                          ? isDarkMode
                            ? "#dc2626"
                            : "#fa4444ff"
                          : formCorrects.insurance
                          ? isDarkMode
                            ? "#4ade80"
                            : "#16a34a"
                          : isHovered.insurance
                          ? "#9CA3AF"
                          : "transparent",
                      },
                      transition: "all 150ms ease-in-out",
                    }),
                    menu: (base) => ({
                      ...base,
                      color: isDarkMode ? "white" : "black",
                      backgroundColor: isDarkMode ? "#0f172a" : "white",
                      marginTop: "4px",
                      borderRadius: "0.5rem",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                      zIndex: 10,
                      width: "100%",
                    }),
                    option: (base, state) => ({
                      ...base,
                      color: "#006affff",
                      backgroundColor: state.isFocused ? "#f9fafb" : "white",
                      cursor: "pointer",
                      boxShadow: "none",
                      width: "100%",
                    }),
                    singleValue: (base) => ({
                      ...base,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      boxShadow: "none",
                      width: "100%",
                    }),
                    placeholder: (base) => ({
                      ...base,
                      fontSize: "15px",
                      color: "#9CA3AF",
                      marginRight: "-4px",
                      textAlign: "right",
                    }),
                    input: (base) => ({
                      ...base,
                      marginRight: "-5px",
                      paddingLeft: "0px",
                    }),
                  }}
                />
              </div>
              <div>
                <ErrorMessage
                  errorMessage={formErrorMessages.insurance}
                ></ErrorMessage>
              </div>
            </div>
            <div>
              <div
                onMouseEnter={() =>
                  setIsHovered((prev) => ({ ...prev, gender: true }))
                }
                onMouseLeave={() =>
                  setIsHovered((prev) => ({ ...prev, gender: false }))
                }
              >
                <Select
                  name="gender"
                  options={genderOptions}
                  components={{
                    Option: CustomOption,
                    SingleValue: CustomSingleValue,
                  }}
                  value={selectedElementOption("gender")}
                  placeholder="جنسیت"
                  onChange={(selectedOption) => {
                    handleChange({
                      target: { name: "gender", value: selectedOption.value },
                    });
                  }}
                  onBlur={() => handleBlurSelect("gender")}
                  styles={{
                    control: (base, state) => ({
                      ...base,
                      backgroundColor: isDarkMode ? "#0f172a" : "#f3f4f6",
                      borderRadius: "9999px",
                      borderColor: `${
                        formErrors.gender
                          ? isDarkMode
                            ? "#dc2626"
                            : "#fa4444ff"
                          : formCorrects.gender
                          ? isDarkMode
                            ? "#4ade80"
                            : "#16a34a"
                          : isHovered.gender
                          ? "#9CA3AF"
                          : "transparent"
                      }`,
                      padding: "2px 12px",
                      fontSize: "0.875rem",
                      boxShadow: "none",
                      outline: "none",
                      width: "222px",
                      "&:hover": {
                        borderColor: formErrors.gender
                          ? isDarkMode
                            ? "#dc2626"
                            : "#fa4444ff"
                          : formCorrects.gender
                          ? isDarkMode
                            ? "#4ade80"
                            : "#16a34a"
                          : isHovered.gender
                          ? "#9CA3AF"
                          : "transparent",
                      },
                      transition: "all 0.15s ease-in-out",
                    }),
                    menu: (base) => ({
                      ...base,
                      color: isDarkMode ? "white" : "black",
                      backgroundColor: isDarkMode ? "#0f172a" : "white",
                      marginTop: "4px",
                      borderRadius: "0.5rem",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                      zIndex: 10,
                      width: "100%",
                    }),
                    option: (base, state) => ({
                      ...base,
                      color: "#006affff",
                      backgroundColor: state.isFocused ? "#f9fafb" : "white",
                      cursor: "pointer",
                      boxShadow: "none",
                      width: "100%",
                    }),
                    singleValue: (base) => ({
                      ...base,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      boxShadow: "none",
                      width: "100%",
                    }),
                    placeholder: (base) => ({
                      ...base,
                      fontSize: "15px",
                      color: "#9CA3AF",
                      marginRight: "-4px",
                      textAlign: "right",
                    }),
                    input: (base) => ({
                      ...base,
                      marginRight: "-5px",
                      paddingLeft: "0px",
                    }),
                  }}
                />
              </div>
              <ErrorMessage
                errorMessage={formErrorMessages.gender}
              ></ErrorMessage>
            </div>
            <div>
              <div
                onMouseEnter={() =>
                  setIsHovered((prev) => ({ ...prev, email: true }))
                }
                onMouseLeave={() =>
                  setIsHovered((prev) => ({ ...prev, email: false }))
                }
              >
                <Input1
                  form={"signup"}
                  type={"email"}
                  inputName={"email"}
                  placeholder={"ایمیل"}
                  pattern={patterns.email}
                  value={formValues.email}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  handleFocus={handleFocus}
                  error={formErrors.email}
                  correct={formCorrects.email}
                  isDarkMode={isDarkMode}
                  isHovered={isHovered.email}
                ></Input1>
              </div>
              <div>
                <ErrorMessage
                  errorMessage={formErrorMessages.email}
                ></ErrorMessage>
              </div>
            </div>
            <div>
              <div
                className="relative"
                onMouseEnter={() =>
                  setIsHovered((prev) => ({ ...prev, password: true }))
                }
                onMouseLeave={() =>
                  setIsHovered((prev) => ({ ...prev, password: false }))
                }
              >
                <Input1
                  form={"signup"}
                  type={showPassword ? "text" : "password"}
                  inputName={"password"}
                  placeholder={"رمز عبور"}
                  pattern={patterns.password}
                  value={formValues.password}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  handleFocus={handleFocus}
                  error={formErrors.password}
                  correct={formCorrects.password}
                  isDarkMode={isDarkMode}
                  isHovered={isHovered.password}
                ></Input1>
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
              <ErrorMessage
                errorMessage={formErrorMessages.password}
              ></ErrorMessage>
            </div>
          </div>
        </div>

        <Button1 text={"ثبت نام"} onClick={handleSubmit} />
        <div className="flex flex-row justify-center text-sm text-gray-500 dark:text-gray-400 mt-2 mb-6">
          <h2>قبلا ثبت نام کردی؟</h2>

          <Link2 text={"ورود"} value={false} />
        </div>

        <div className="flex flex-row ">
          <ModeToggle />
          <ModeText fontSize={"15px"} />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
