import Image from "next/image";
import React from "react";
import myImg from "@/assets/my-img.png";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { ImArrowDown2 } from "react-icons/im";
import { personal } from "../data-service/data-provider";
import Link from "next/link";

export default function PersonalHeader() {
  return (
    <>
      <div className=" xl:w-96 w-full mt-4  xl:min-h-[95vh] h-full border border-prime_gray rounded-3xl">
        <div className=" py-4 flex flex-col  justify-center items-center ">
          <div className=" flex flex-col items-center w-full mx-2 mt-5 ">
            <p className=" text-4xl sm:text-5xl text-white font-semibold ">
              Thuvarakan
            </p>
            <p className="text-md sm:text-lg mt-2">Full Stack Developer</p>
          </div>
          <img
            className=" mt-4  w-2/5 min-w-[220px] rounded-[40px] "
            src={myImg.src}
            alt="my-personal-image"
          />
          <p className=" text-lg sm:text-2xl mt-8  "> {personal.email} </p>
          <p className=" text-lg sm:text-2xl  "> Based on {personal.based}</p>
          {/* Icons section  */}
          <div className=" mt-10 flex flex-row gap-2 ">
            <Link
              href="https://github.com/ThuvaMathu"
              target="_blank"
              className=" w-16 h-16 border border-prime_gray rounded-full flex justify-center items-center text-prime_gray hover:text-prime_Green hover:border-prime_Green transition-all duration-500 ease-linear "
            >
              <FaGithub size={30} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/thuvarakan-selvasothy/"
              target="_blank"
              className=" w-16 h-16 border border-prime_gray rounded-full flex justify-center items-center text-prime_gray hover:text-prime_Green hover:border-prime_Green transition-all duration-500 ease-linear "
            >
              <FaLinkedin size={30} />
            </Link>
            <Link
              href="https://twitter.com/TSelvasothy"
              target="_blank"
              className=" w-16 h-16 border border-prime_gray rounded-full flex justify-center items-center text-prime_gray hover:text-prime_Green hover:border-prime_Green transition-all duration-500 ease-linear "
            >
              <FaTwitter size={30} />
            </Link>
          </div>
          <div className=" w-full flex justify-center items-start gap-3 ">
            <a
              href="/my_resume.pdf"
              target="_blank"
              download
              className=" w-4/5 mt-10 bg-[] text-lg rounded-2xl text-black py-3 flex justify-center items-center hover:scale-105 transition-all duration-500 ease-linear bg-prime_Green "
            >
              <div className=" flex flex-row gap-3 justify-center items-center ">
                DOWNLOAD CV <ImArrowDown2 className=" animate-bounce " />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
