import Logo1 from "./Logo1";
import Link3 from "./Link3";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ServicesMenu from "./ServicesMenu";

const Footer = () => {
  var top = "-120px";

  var right = "-300px";

  const mediaQuery = window.matchMedia("(min-width:560px)");

  function updateString(e) {
    top = e.matches ? "-120px" : "-350px";
    right = e.matches ? "-300px" : "-50px";
  }

  updateString(mediaQuery);
  mediaQuery.addEventListener("change", updateString);

  const [servicesMenu, setServicesMenu] = useState(false);

  const navigator = useNavigate();

  const articlesClick = () => {
    navigator("/articles");
  };
  const homeClick = () => {
    navigator("/SabtJavid/");
  };

  const aboutUsClick = () => {
    navigator("/aboutus");
  };
  const contactUsClick = () => {
    navigator("/contactus");
  };
  return (
    <div className="flex flex-col upsm:flex-row bg-white p-5">
      <div
        id="logo-address-number"
        className="flex flex-col justify-center items-center upsm:p-5 "
      >
        <div className="mb-5">
          <Logo1 width={"150px"} height={"150px"} />
        </div>
        <div
          id="address-number"
          className="text-darkBlue flex flex-col mt-5 text-[17px] upsm:text-[20px]"
        >
          <div>
            دفتر ایران : تهران - میدان شیخ بهایی - کوچه مسعود - ساختمان بهار
          </div>
          <div className="mt-5 mb-5"> خط ویژه : 02188883150</div>
        </div>
      </div>
      <div
        id="list"
        className="flex flex-row uplg:flex-col justify-center upsm:mt-[60px] uplg:mr-[100px]"
      >
        <div className="flex flex-col">
          {" "}
          <div className="w-fit uplg:-mb-1">
            <Link3 text="صفحه اصلی" size={"20px"} onClick={homeClick} />
          </div>
          <div className="w-fit uplg:-mb-1">
            {" "}
            <div
              className="h-[30px] mb-5 relative"
              onMouseEnter={() => setServicesMenu(true)}
              onMouseLeave={() => setServicesMenu(false)}
              onClick={() => setServicesMenu(true)}
              onBlur={() => setServicesMenu(false)}
            >
              <Link3 text="خدمات" size={"20px"} />
              <ServicesMenu
                menuOpen={servicesMenu}
                setMenuOpen={setServicesMenu}
                top={top}
                right={right}
              />
            </div>
          </div>
          <div className="w-fit uplg:-mb-1">
            <Link3 text="مقالات" size={"20px"} onClick={articlesClick} />
          </div>
        </div>
        <div className="flex flex-col mr-5 uplg:mr-0">
          <div className="w-fit uplg:-mb-1">
            <Link3 text="تماس با ما" size={"20px"} onClick={contactUsClick} />
          </div>
          <div className="w-fit uplg:-mb-1">
            <Link3 text="درباره ما" size={"20px"} onClick={aboutUsClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
