import Link4 from "../components/Link4";
const ContactUs = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col bg-darkBlue p-6 rounded-2xl shadow-2xl text-white w-[80%] upmd:w-[60%] mb-10 mt-10">
        <h1 className="text-[20px]">
          بدون تردید برای دریافت هرگونه اطلاعاتی با ما تماس بگیرید .
        </h1>
        <div className="w-fit mt-10 flex flex-row text-[20px]">
          <div className="whitespace-nowrap">دفتر ایران خط ویژه:&nbsp;</div>
          <Link4 text="02188881425" size="20px" />
        </div>
        <div className="w-fit mt-10 text-[20px] flex flex-row">
          <div className="whitespace-nowrap">دفتر ایران خط ویژه:&nbsp;</div>
          <Link4 text="02188881425" size="20px" />
        </div>
        <div className="w-fit mt-10 hidden upsm:block text-[20px]">
          <div className="flex flex-row">
            <div className="whitespace-nowrap">
              پشتیبانی فنی برای مشتریان:&nbsp;
            </div>
            <div>
              <Link4 text=" info@sabtjavid.com" size="20px" />
            </div>
          </div>
        </div>
        <div id="numbers" className="w-fit mt-10 block upsm:hidden text-[20px]">
          <div className="mb-5">پشتیبانی فنی برای مشتریان:</div>
          <Link4 text=" info@sabtjavid.com" size="20px" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
