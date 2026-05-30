import React, { useEffect, useState } from "react";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { FaDownload } from "react-icons/fa";
import image from "../assets/img.jpg";

const Hero = () => {
  //state
  const [text, setText] = useState(""); //متن درحال تایپ
  const [index, setIndex] = useState(0); //اندیس تایتل
  const title = ["frontend developer", "react specialist"];
  //در هر صد میلی ثانیه یدونه اضافه کن
  useEffect(() => {
    //بررسی می‌کنه آیا هنوز کلمه‌ای برای تایپ مونده؟ بله چون ایندکس 0
    if (index < title.length) {
      //گرفتن کلمه
      const currentText = title[index];
      //  اگه هنوز همه حروف تایپ نشده هر 100 اضافه کن
      if (text.length < currentText.length) {
        const timeout = setTimeout(() => {
          setText(currentText.slice(0, text.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } //در آخرش 2 ثانیه صبر میکند
      else {
        const timeout = setTimeout(() => {
          setIndex((prev) => (prev + 1) % title.length);
          setText(""); // خالی کن برای کلمه بعدی
        }, 2000);
      }
    }
  }, [text, index]);
  return (
    <div>
      <div
        id="home"
        className="flex min-h-screen w-full items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-6 p-5 text-center">
          <div className="relative">
            <img
              src={image}
              className="h-50 w-50 rounded-full border-4 border-blue-400 object-cover shadow-2xl"
            />
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl font-bold text-gray-800">
              Mobina mohagheghi
            </h1>
            <div className="h-8">
              <p className="text-xl text-blue-600 font-medium">
                {text}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            <p className="max-w-md text-gray-600 ">
              Frontend developer passionate about building modern, responsive
              web applications with React and tailwindCss. Always eager to learn
              and create meaningful digital experiences.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700">
              <FaDownload />
              Download Resume
            </button>
          </div>

          <div className="flex gap-3">
            <a
              href="https://github.com/mobina-violet"
              target="_blank"
              className="transform rounded-full bg-blue-600 p-2 text-white transition hover:scale-110 hover:bg-blue-700">
              <IoLogoGithub className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/mobina-mohagheghi-b92949395"
              target="_blank"
              className="transform rounded-full bg-blue-600 p-2 text-white transition hover:scale-110 hover:bg-blue-700">
              <IoLogoLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://Mobina.violet"
              target="_blank"
              className="transform rounded-full bg-blue-600 p-2 text-white transition hover:scale-110 hover:bg-blue-700">
              <IoLogoInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
