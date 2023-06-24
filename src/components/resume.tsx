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
} from "react-icons/fa";
import TranslateOnScroll from "../common/translate-on scroll";
import { education, workExperience } from "../data-service/data-provider";
export default function Resume() {
  return (
    <>
      <div className=" w-full ">
        <div className=" flex flex-row justify-center items-center py-1  rounded-2xl border border-prime_gray gap-2 w-36 mb-8 ">
          <FaBriefcase size={18} className=" text-prime_gray " />
          <p className="  ">Resume</p>
        </div>
        <div className=" group/first ">
          <TranslateOnScroll translateY={100} duration={700}>
            <p className="text-4xl lg:text-6xl mb-10 group-hover/first:text-prime_Green ">
              Education
            </p>
          </TranslateOnScroll>
          {education.map((data: any, i: number) => (
            <TranslateOnScroll translateY={50} duration={700} key={i}>
              <div className=" flex flex-row w-full h-full group  ">
                <div className="   flex flex-col justify-center items-center ">
                  <div className=" w-4 h-4 bg-prime_gray rounded-full group-hover:bg-prime_Green transition-all duration-300 ease-in  " />
                  <div className=" w-[0.5px] h-full bg-prime_gray  group-hover:bg-prime_Green transition-all duration-300 ease-in  " />
                </div>
                <div className=" flex-grow xl:ml-24 ml-8 ">
                  <p className="text-xl  text-prime_gray -translate-y-[5px]  group-hover:text-prime_Green transition-all duration-300 ease-in  ">
                    {data?.dates}
                  </p>
                  <p className=" text-2xl lg:text-3xl mb-2  ">{data?.degree}</p>
                  <p className="text-md lg:text-lg  text-prime_gray mb-12  ">
                    {data?.location}
                  </p>
                </div>
              </div>
            </TranslateOnScroll>
          ))}
        </div>
        <div className=" group/first ">
          <TranslateOnScroll translateY={100} duration={700}>
            <p className="text-4xl lg:text-6xl my-10 group-hover/first:text-prime_Green ">
              Experience
            </p>
          </TranslateOnScroll>
          {workExperience.map((data: any, i: number) => (
            <TranslateOnScroll translateY={50} duration={700} key={i}>
              <div className=" flex flex-row w-full h-full group ">
                <div className="   flex flex-col justify-center items-center ">
                  <div className=" w-4 h-4 bg-prime_gray rounded-full group-hover:bg-prime_Green transition-all duration-300 ease-in  " />
                  <div className=" w-[0.5px] h-full bg-prime_gray  group-hover:bg-prime_Green transition-all duration-300 ease-in  " />
                </div>
                <div className=" flex-grow xl:ml-24 ml-8 ">
                  <p className="text-xl  text-prime_gray -translate-y-[5px] group-hover:text-prime_Green transition-all duration-300 ease-in  ">
                    {data?.dates}
                  </p>
                  <p className=" text-2xl lg:text-3xl mb-2  ">
                    {data?.position}
                  </p>
                  <p className=" text-xl lg:text-2xl mb-1  ">{data?.company}</p>
                  <p className="text-md lg:text-lg  text-prime_gray mb-12  ">
                    {data?.location}
                  </p>
                </div>
              </div>
            </TranslateOnScroll>
          ))}
        </div>
      </div>
    </>
  );
}
