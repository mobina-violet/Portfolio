import React from "react";

import { GoArrowRight } from "react-icons/go";
import { IoHome } from "react-icons/io5";
import { GoProjectRoadmap } from "react-icons/go";
import { LuAirplay } from "react-icons/lu";
import { IoMdContact } from "react-icons/io";
import { GiSkills } from "react-icons/gi";

const HeaderLeft = () => {
  return (
    <div className="md:flex-1">
      <div className="min-h-screen top-0 hidden md:sticky md:flex items-center justify-center bg-blue-400 text-white">
        <ul className=" flex flex-col gap-10">
          {["home", "experience", "skill", "project", "contact"].map((item) => (
            <li
              key={item}
              className="flex  font-serif items-center justify-start cursor-pointer font-medium transition-all duration-200 group sm:text-lg md:text-2xl">
              <GoArrowRight />
              <a
                href={`#${item}`}
                className="transition-all duration-200 hover:translate-x-3">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="left-0 right-0 top-0 fixed z-10 flex justify-evenly bg-blue-400 text-white md:hidden">
        <a href="#home" className="flex flex-col items-center">
          <IoHome className="text-2xl" />
          <span className="text-xs">Home</span>
        </a>
        <a href="#project" className="flex flex-col items-center">
          <GoProjectRoadmap className="text-2xl" />
          <span className="text-xs">project</span>
        </a>
        <a href="#experience" className="flex flex-col items-center">
          <LuAirplay className="text-2xl" />
          <span className="text-xs">experience</span>
        </a>
        <a href="#contact" className="flex flex-col items-center">
          <IoMdContact className="text-2xl" />
          <span className="text-xs">contact</span>
        </a>
        <a href="#skill" className="flex flex-col items-center">
          <GiSkills className="text-2xl" />
          <span className="text-xs">contact</span>
        </a>
      </div>
    </div>
  );
};
export default HeaderLeft;
