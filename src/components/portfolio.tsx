import React from "react";
import { FaCubes } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import TranslateOnScroll from "../common/translate-on scroll";
import { Projects } from "../data-service/data-provider";
import Link from "next/link";
import Image from "next/image";
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
          <div className=" w-full flex-col gap-4  flex ">
            {Projects.map((data, i: number) => (
              <div
                className=" flex sm:justify-startr justify-center items-center  w-full "
                key={i}
              >
                <TranslateOnScroll translateX={data?.tx} duration={2000}>
                  <div className=" flex flex-col w-full gap-1 lg:gap-2  group ">
                    <div
                      className=" flex flex-col  w-full h-80  py-4 px-2 rounded-2xl overflow-hidden relative  "
                      style={{ backgroundColor: data?.color }}
                    >
                      <p className=" ml-2 text-left text-lg sm:text-xl group-hover:invisible visible  transition-all duration-700 ease-in-out ">
                        {data?.title}
                      </p>
                      <div className=" w-full h-full mt-2 rounded-2xl overflow-hidden relative">
                        <Image
                          className=" w-full group-hover:scale-105 transition-all duration-700 ease-in-out object-cover  "
                          fill
                          src={data?.img.src}
                          alt={data?.title}
                        />
                      </div>

                      <div className=" absolute top-0 left-0 bg-black/90 w-full h-full group-hover:translate-y-0 translate-y-full group-hover:opacity-100 opacity-0   duration-500 ease-in-out transition-all py-4 px-6   ">
                        <p className="  text-left text-lg sm:text-xl group-hover:text-prime_Green  hover:border-prime_Green transition-all duration-700 ease-in-out ">
                          {data?.title}
                        </p>
                        <div className=" w-full max-h-48 overflow-y-auto mt-2 ">
                          <div className=" flex flex-col gap-2   ">
                            <p className="  text-base sm:text-lg font-semibold text-gray-300 ">
                              Description
                            </p>
                            <p className="  text-sm sm:text-base text-gray-300  ">
                              {data?.des}
                            </p>
                          </div>
                          <div className=" flex flex-col gap-2 mt-2 ">
                            <p className="  text-base sm:text-lg font-semibold text-gray-300 ">
                              Technology
                            </p>
                            <p className="  text-sm sm:text-base text-gray-300  ">
                              {data?.tech}
                            </p>
                          </div>
                        </div>{" "}
                        <div className=" flex justify-start items-start w-full mt-4 ">
                          <Link
                            href={data?.webLink}
                            target="_blank"
                            className=" text-lg  text-prime_Green transition-all duration-700 ease-in-out "
                          >
                            <div className=" flex flex-row justify-center items-center gap-4 ">
                              Visit site <MdOpenInNew className="" />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
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
