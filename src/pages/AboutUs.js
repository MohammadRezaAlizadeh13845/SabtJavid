import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
const AboutUs = () => {
  return (
    <div className="flex flex-col">
      <div className="sm:mr-5 flex flex-row items-center">
        <div className="mt-5 flex flex-col justify-center items-start bg-darkBlue p-6 rounded-2xl shadow-2xl text-white mb-5 mx-5 sm:mx-0 sm:w-[450px] md:w-[700px]">
          <h1 className="text-[20px] mb-5">اهدافتان را به ما بسپارید</h1>
          <p>
            موسسه حقوقی و ثبتی جاوید با سال‌ها تجربه در زمینه خدمات ثبتی و
            مشاوره حقوقی، همراه مطمئن شما در مسیر رشد و موفقیت است. ما با تیمی
            متخصص و متعهد، دغدغه‌های حقوقی و اداری شما را به ساده‌ترین شکل ممکن
            برطرف می‌کنیم.
          </p>
        </div>
        <div id="img" className="flex-shrink-0 hidden md:block">
          <img
            alt="img"
            className="rounded-[10px] w-[300px]  mr-[50px]"
            src={img1}
          />
        </div>
      </div>
      <div className="self-end sm:ml-5  flex flex-row">
        <div id="img" className="flex-shrink-0 hidden md:block">
          <img
            alt="img"
            className="rounded-[10px] w-[300px]  ml-[50px]"
            src={img2}
          />
        </div>
        <div className="flex flex-col justify-center items-start bg-darkBlue p-6 rounded-2xl shadow-2xl text-white mb-5 mx-5 sm:mx-0 sm:w-[450px] md:w-[700px]">
          <h1 className="text-[20px] mb-5">صرفه‌جویی در زمان و هزینه</h1>
          <p>
            انجام امور ثبتی و حقوقی اغلب پیچیده و زمان‌بر است. در موسسه جاوید،
            با بهره‌گیری از تجربه و دانش کارشناسان ما، مسیرهای طولانی و پرهزینه
            به ساده‌ترین راهکارها تبدیل می‌شوند. شما تمرکزتان را بر کسب‌وکار خود
            بگذارید، ما از امور حقوقی پشتیبانی می‌کنیم.
          </p>
        </div>
      </div>
      <div className="sm:mr-5  flex flex-row">
        <div className="flex flex-col justify-center items-start bg-darkBlue p-6 rounded-2xl shadow-2xl text-white mb-5 mx-5 sm:mx-0 sm:w-[450px] md:w-[700px]">
          <h1 className="text-[20px] mb-5">هر آنچه نیاز دارید در یک جا</h1>
          <p>
            از ثبت شرکت و برند گرفته تا مشاوره حقوقی تخصصی، تمامی خدمات موردنیاز
            شما در موسسه جاوید گرد هم آمده است. هدف ما ایجاد آرامش خاطر برای شما
            و تضمین موفقیت پروژه‌های حقوقی و ثبتی شماست.
          </p>
        </div>
        <div id="img" className="flex-shrink-0 hidden md:block">
          <img
            alt="img"
            className="rounded-[10px] w-[300px]  mr-[50px]"
            src={img3}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
