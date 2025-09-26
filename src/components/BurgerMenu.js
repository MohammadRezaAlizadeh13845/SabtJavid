import Link3 from "./Link3";
import { useBurgerMenuContext } from "../context/BurgerMenuContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const BurgerMenu = ({ width = "300px", height = "450px" }) => {
  const { open, setOpen } = useBurgerMenuContext();
  const [hidden, setHidden] = useState(!open);
  useEffect(() => {
    if (open) {
      setHidden(false);
    } else {
      const timer = setTimeout(() => setHidden(true), 200);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const navigator = useNavigate();

  const articlesClick = () => {
    navigator("/articles");
    setOpen(false);
  };
  const homeClick = () => {
    navigator("/SabtJavid/");
    setOpen(false);
  };
  const servicesClick = () => {
    alert("این بخش در حال تکمیل است.");
  };
  const aboutUsClick = () => {
    navigator("/aboutus");
    setOpen(false);
  };
  const contactUsClick = () => {
    navigator("/contactus");
    setOpen(false);
  };

  return (
    <div>
      <div
        style={{ width, height }}
        className={`flex flex-col justify-center items-start bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl dark:shadow-black  max-w-md md:max-w-lg text-right transition-all duration-200 ease-in-out mx-auto mb-5 opacity-0 ${
          open ? "opacity-100" : "opacity-0 "
        } ${hidden ? "hidden" : "block"}`}
      >
        <Link3 text="صفحه اصلی" size={"20px"} onClick={homeClick} />
        <div class="h-[2px] w-full bg-gradient-to-r from-transparent via-[#214EAE] to-transparent mb-5"></div>

        <Link3 text="خدمات" size={"20px"} onClick={servicesClick} />
        <div class="h-[2px] w-full bg-gradient-to-r from-transparent via-[#214EAE] to-transparent mb-5"></div>
        <Link3 text="مقالات" size={"20px"} onClick={articlesClick} />
        <div class="h-[2px] w-full bg-gradient-to-r from-transparent via-[#214EAE] to-transparent mb-5"></div>
        <Link3 text="درباره ما" size={"20px"} onClick={aboutUsClick} />
        <div class="h-[2px] w-full bg-gradient-to-r from-transparent via-[#214EAE] to-transparent mb-5"></div>
        <Link3 text="تماس با ما" size={"20px"} onClick={contactUsClick} />
      </div>
    </div>
  );
};

export default BurgerMenu;
