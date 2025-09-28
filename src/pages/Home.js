import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div className="flex flex-col">
      <div
        className="mr-10 mt-10 max-w-[80%] h-fit bg-cover bg-center bg-no-repeat flex-shrink-0 rounded-[15px] "
        style={{ backgroundImage: `url(${img4})` }}
      >
        <div className=" flex flex-col w-full justify-center items-center max-w-[80%] upmd:w-[60%] mx-auto">
          <div id="title" className=" text-[17px] md:text-[20px]">
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.3 },
              }}
            >
              <h1 className=" bg-white bg-opacity-80 p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)]  mt-[50px] ">
                چرا هلدینگ مهاجرتی، ثبتی و حقوقی جاوید؟
              </h1>
            </motion.div>
          </div>
          <div id="content" className=" text-[15px] md:text-[18px]">
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.3 },
              }}
            >
              <p className=" bg-white bg-opacity-80 p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] mt-[50px] mb-5">
                هلدینگ مهاجرتی، ثبتی و حقوقی جاوید با سال‌ها تجربه و تیمی متخصص،
                خدمات حقوقی، ثبتی و مهاجرتی شما را با دقت، سرعت و امنیت انجام
                می‌دهد. از ثبت شرکت و برند گرفته تا مشاوره حقوقی و خدمات
                مهاجرتی، همه نیازهای شما در یک مکان پاسخ داده می‌شوند. با جاوید،
                مسیر موفقیت شما هموار و مطمئن است.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div
        className=" mt-10 w-[80%] h-fit md:h-[400px] bg-cover bg-center bg-no-repeat flex-shrink-0 rounded-[15px] self-end ml-10"
        style={{ backgroundImage: `url(${img5})` }}
      >
        <div className=" flex flex-col w-full justify-center items-center max-w-[80%] upmd:w-[60%] mx-auto">
          <div id="title" className=" text-[17px] md:text-[20px]">
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.3 },
              }}
            >
              <h1 className=" bg-white bg-opacity-80 p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)]  mt-[50px] ">
                شرکت دانش بنیان
              </h1>
            </motion.div>
          </div>
          <div id="content" className=" text-[15px] md:text-[18px]">
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.3 },
              }}
            >
              <p className=" bg-white bg-opacity-80 p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] mt-[50px] mb-10">
                مجموعه هلدینگ جاوید با ثبت چندین شرکت دانش‌بنیان، افتخار دارد به
                عنوان مشاور و مجری، همراه متقاضیان محترم در فرآیند ثبت شرکت‌های
                دانش‌بنیان باشد. شرکت‌های دانش‌بنیان از مزایایی ویژه برخوردارند،
                از جمله معافیت از پرداخت مالیات، عوارض، حقوق گمرکی، سود بازرگانی
                و عوارض صادراتی به مدت ۱۲ سال.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div
        className=" mr-10 mt-10 w-[80%] h-fit bg-cover bg-center bg-no-repeat flex-shrink-0 rounded-[15px]"
        style={{ backgroundImage: `url(${img6})` }}
      >
        <div className=" flex flex-col w-full justify-center items-center max-w-[80%] upmd:w-[60%] mx-auto">
          <div id="title" className=" text-[17px] md:text-[20px]">
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.3 },
              }}
            >
              <h1 className=" bg-white bg-opacity-80 p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)]  mt-[50px] ">
                منطقه آزاد تجاری
              </h1>
            </motion.div>
          </div>
          <div id="content" className=" text-[15px] md:text-[18px]">
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.3 },
              }}
            >
              <p className=" bg-white bg-opacity-80 p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)]  mt-[50px] mb-10">
                منطقه آزاد تجاری، محدوده‌ای حراست‌شده، بندری یا غیر‌بندری،
                معمولاً در مرز کشور است که برخی از مقررات جاری کشور شامل آن
                نمی‌شود. این مناطق با بهره‌گیری از مزایایی نظیر معافیت‌های
                مالیاتی و بخشودگی سود و عوارض گمرکی، فرصت‌های ویژه‌ای برای
                فعالیت‌های تجاری و اقتصادی فراهم می‌کنند.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div
        className="self-end ml-10 mt-10 w-[80%] h-fit bg-cover bg-center bg-no-repeat flex-shrink-0 rounded-[15px]"
        style={{ backgroundImage: `url(${img7})` }}
      >
        <div className=" flex flex-col w-full justify-center items-center max-w-[80%] upmd:w-[60%] mx-auto">
          <div id="title" className=" text-[17px] md:text-[20px]">
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.3 },
              }}
            >
              <h1 className=" bg-white bg-opacity-80 p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)]  mt-[50px] ">
                منطقه ویژه اقتصادی
              </h1>
            </motion.div>
          </div>
          <div id="content" className=" text-[15px] md:text-[18px]">
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.3 },
              }}
            >
              <p className=" bg-white bg-opacity-80 p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)]  mt-[50px] mb-10">
                در مناطق ویژه اقتصادی، ثبت شرکت‌ها بر عهده سازمان ثبت اسناد و
                املاک است. صدور مجوز ساخت و ساز به صورت رایگان انجام می‌شود و
                ورود تجهیزات، ماشین‌آلات و ابزار خطوط تولید بدون پرداخت عوارض
                گمرکی امکان‌پذیر است. همچنین، هیچ محدودیت زمانی برای متروکه شدن
                کالا در منطقه ویژه وجود ندارد.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div
        className="mr-10 mt-10 w-[80%] h-fit bg-cover bg-center bg-no-repeat flex-shrink-0 rounded-[15px] mb-10"
        style={{ backgroundImage: `url(${img8})` }}
      >
        <div className=" flex flex-col w-full justify-center items-center max-w-[80%] upmd:w-[60%] mx-auto">
          <div id="title" className=" text-[17px] md:text-[20px]">
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.3 },
              }}
            >
              <h1 className=" bg-white bg-opacity-80 p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)]  mt-[50px] ">
                ماموریت ما
              </h1>
            </motion.div>
          </div>
          <div id="content" className=" text-[15px] md:text-[18px]">
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.3 },
              }}
            >
              <p className=" bg-white bg-opacity-80 p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)]  mt-[50px] mb-10">
                ماموریت ما در هلدینگ مهاجرتی، ثبتی و حقوقی جاوید، ارائه خدمات
                حقوقی، ثبتی و مهاجرتی با بالاترین کیفیت و بیشترین دقت است. هدف
                ما ساده‌سازی مسیرهای پیچیده اداری و حقوقی برای مشتریان،
                صرفه‌جویی در زمان و هزینه، و ایجاد آرامش خاطر در تمامی مراحل
                است. ما متعهدیم با تخصص و تجربه خود، به موفقیت و رشد پایدار شما
                کمک کنیم.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
