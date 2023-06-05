import React, { useState, useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import MyProjectCircle from "../svg/my-project-spinner";
import {
  FaHome,
  FaUserTie,
  FaCubes,
  FaShapes,
  FaBriefcase,
  FaEnvelope,
  FaArrowDown,
} from "react-icons/fa";
import TranslateOnScroll from "../common/translate-on scroll";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
function Home() {
  const colorRef = useRef<any>();
  return (
    <>
      <div className=" w-full ">
        <div className=" flex flex-row justify-center items-center py-1  rounded-2xl border border-prime_gray gap-2 w-36 mb-8 ">
          <FaHome size={18} className=" text-prime_gray " />
          <p className="  ">Introduce</p>
        </div>
        <TranslateOnScroll executeOnload={true} translateY={100} duration={700}>
          <p className="text-4xl lg:text-6xl ">
            Say Hi from <span className=" text-prime_Green ">Thuva</span>
          </p>

          <div
            ref={colorRef}
            className=" text-4xl lg:text-6xl flex flex-col gap-2 h-36 text-prime_yellow  "
          >
            <p className="   ">
              <span className=" text-white  ">I am</span>
            </p>
            <TypeAnimation
              sequence={[
                "Web Developer",
                1000,

                "Android Developer",
                1000,

                "FullStack Developer",
                2000,

                "FrontEnd Developer",
                3000,

                "BackEnd Developer",
                3000,

                "IOS Developer",
                3000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-4xl lg:text-6xl "
              //style={{ fontSize: "2em", display: "inline-block" }}
            />
          </div>
          <p className=" text-lg lg:text-2xl text-gray-500 lg:mt-8  ">
            I derive pure joy from crafting beautifully simple designs and code,
            immersing myself in the art of elegant simplicity.
          </p>
        </TranslateOnScroll>
        <ScrollLink
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          <TranslateOnScroll
            executeOnload={true}
            translateX={-200}
            duration={1000}
          >
            <div className=" h-60 w-full flex  relative    ">
              <FaArrowDown
                className=" absolute top-28 right-[155px] text-black animate-bounce"
                size={40}
              />
              <MyProjectCircle className=" absolute top-10 right-20 animate-spin-slow w-48 h-44 fill-prime_gray cursor-pointer  " />
            </div>
          </TranslateOnScroll>
        </ScrollLink>
        <div className=" flex flex-row justify-start gap-5 xl:gap-16  ">
          <div className=" flex flex-col max-w-[150px]">
            <p className=" text-prime_Green text-7xl xl:text-8xl "> 2+ </p>
            <p className=" text-gray-500 uppercase ">years of experience</p>
          </div>
          <div className=" flex flex-col max-w-[150px]">
            <p className=" text-prime_Green text-7xl xl:text-8xl"> 5+ </p>
            <p className=" text-gray-500 uppercase ">Projects Completed</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
