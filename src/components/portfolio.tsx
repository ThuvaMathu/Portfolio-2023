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
import { MdOpenInNew } from "react-icons/md";
import { SiFlutter, SiNextdotjs } from "react-icons/si";
import TranslateOnScroll from "../common/translate-on scroll";
import {
  Projects,
  education,
  specializations,
  workExperience,
} from "../data-service/data-provider";
export default function Portfolio() {
  return (
    <>
      <div className=" w-full ">
        <div className=" flex flex-row justify-center items-center py-1  rounded-2xl border border-prime_gray gap-2 w-36 mb-8 ">
          <FaCubes size={18} className=" text-prime_gray " />
          <p className="  ">Projects</p>
        </div>
        <div className=" group/first ">
          <TranslateOnScroll translateY={100} duration={700}>
            <p className="text-4xl lg:text-6xl mb-10  ">
              My Featured <span className=" text-prime_Green ">Projects</span>
            </p>
          </TranslateOnScroll>
          <div className=" grid grid-cols-1 justify-center items-center  lg:grid-cols-2  w-full gap-5 ">
            {Projects.map((data: any, i: number) => (
              <div
                className=" flex sm:justify-startr justify-center items-center "
                key={i}
              >
                <TranslateOnScroll translateX={data?.tx} duration={2000}>
                  <div className=" flex flex-col w-full  gap-2 lg:gap-4  group ">
                    <div
                      className=" flex flex-col justify-center items-center w-full h-80  pb-4 px-2 rounded-4xl   "
                      style={{ backgroundColor: data?.color }}
                    >
                      <div className="max-w-sm object-cover mt-10 rounded-2xl overflow-hidden  ">
                        <img
                          className=" w-full group-hover:scale-105 transition-all duration-700 ease-in-out  "
                          src={data?.img.src}
                          alt={data?.title}
                        />
                      </div>

                      <div className=" flex justify-start items-start w-full mt-5 ml-5 ">
                        <a
                          href={data?.webLink}
                          target="_blank"
                          className=" text-lg px-8 py-2 rounded-full bg-prime_black group-hover:bg-white group-hover:text-black transition-all duration-700 ease-in-out "
                        >
                          <div className=" flex flex-row justify-center items-center gap-4 ">
                            View <MdOpenInNew className="" />
                          </div>
                        </a>
                      </div>
                    </div>

                    <p className=" ml-2 text-left text-lg sm:text-xl group-hover:text-prime_Green  hover:border-prime_Green transition-all duration-700 ease-in-out ">
                      {data?.title}
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
