import React, { useState, useEffect } from "react";
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
  FaBuffer,
  FaReact,
  FaFigma,
  FaAws,
  FaWordpress,
} from "react-icons/fa";
import { SiFlutter, SiNextdotjs } from "react-icons/si";
import TranslateOnScroll from "../common/translate-on scroll";
import {
  education,
  specializations,
  workExperience,
} from "../data-service/data-provider";
export default function MySKills() {
  const logoSize = 80;
  const skillList = [
    {
      name: "React",
      rateing: "90%",
      logo: <FaReact />,
      tx: -100,
      ty: 0,
    },
    {
      name: "Figme",
      rateing: "60%",
      logo: <FaFigma />,
      tx: 0,
      ty: -100,
    },
    {
      name: "AWS",
      rateing: "60%",
      logo: <FaAws />,
      tx: 100,
      ty: 0,
    },
    {
      name: "React Native",
      rateing: "80%",
      logo: <SiFlutter />,
      tx: -100,
      ty: 100,
    },
    {
      name: "React",
      rateing: "70%",
      logo: <FaWordpress />,
      tx: 0,
      ty: -100,
    },
    {
      name: "React",
      rateing: "90%",
      logo: <SiNextdotjs />,
      tx: 100,
      ty: -100,
    },
  ];
  return (
    <>
      <div className=" w-full ">
        <div className=" flex flex-row justify-center items-center py-1  rounded-2xl border border-prime_gray gap-2 w-36 mb-8 ">
          <FaShapes size={18} className=" text-prime_gray " />
          <p className="  ">Skills</p>
        </div>
        <div className=" group/first ">
          <TranslateOnScroll translateY={100} duration={700}>
            <p className="text-4xl lg:text-6xl mb-10  ">
              My <span className=" text-prime_Green ">Skills</span>
            </p>
          </TranslateOnScroll>
          <div className=" grid grid-cols-1 justify-center items-center sm:grid-cols-2 lg:grid-cols-3  w-full gap-5 ">
            {skillList.map((data: any, i: number) => (
              <div
                className=" flex sm:justify-startr justify-center items-center "
                key={i}
              >
                <TranslateOnScroll
                  translateY={data?.ty}
                  translateX={data?.tx}
                  duration={3000}
                >
                  <div className=" flex flex-col sm:w-44 w-36 py-10 gap-12 sm:gap-16 justify-center items-center group border border-prime_gray2 rounded-[500px]   hover:border-prime_Green transition-all duration-700 ease-in-out">
                    <div className=" text-6xl sm:text-8xl group-hover:text-white text-prime_gray2 hover:border-prime_Green transition-all duration-700 ease-in-out">
                      {data?.logo}
                    </div>

                    <p className=" text-2xl sm:text-4xl group-hover:text-prime_Green  hover:border-prime_Green transition-all duration-700 ease-in-out ">
                      {data?.rateing}
                    </p>
                  </div>
                </TranslateOnScroll>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
