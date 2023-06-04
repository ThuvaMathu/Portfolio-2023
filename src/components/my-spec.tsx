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
} from "react-icons/fa";
import TranslateOnScroll from "../common/translate-on scroll";
import {
  education,
  specializations,
  workExperience,
} from "../data-service/data-provider";
export default function MySpec() {
  return (
    <>
      <div className=" w-full ">
        <div className=" flex flex-row justify-center items-center py-1  rounded-2xl border border-prime_gray gap-2 w-44 mb-8 ">
          <FaBuffer size={18} className=" text-prime_gray " />
          <p className="  ">Specializations</p>
        </div>
        <div className=" group/first ">
          <TranslateOnScroll translateY={100} duration={700}>
            <p className="text-4xl lg:text-6xl mb-10  ">
              My <span className=" text-prime_Green ">Specializations</span>
            </p>
          </TranslateOnScroll>
          {specializations.map((data: any, i: number) => (
            <TranslateOnScroll translateX={data.tx} duration={1500} key={i}>
              <div className=" flex flex-col w-full h-full min-h-[100px] group border border-prime_gray2 my-4 rounded-2xl p-10 hover:border-prime_Green transition-all duration-700 ease-in-out">
                <p className=" text-xl group-hover:text-prime_Green transition-all duration-300 ease-in   ">
                  {data.header}
                </p>
                <p className=" text-md text-prime_gray mt-2 mb-6 ">
                  {data.description}
                </p>
                <p className=" text-sm ">{data.done}</p>
              </div>
            </TranslateOnScroll>
          ))}
        </div>
      </div>
    </>
  );
}
