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
function Profile() {
  return (
    <>
      <div className=" w-full ">
        <div className=" flex flex-row justify-center items-center py-1  rounded-2xl border border-prime_gray gap-2 w-36 mb-8 ">
          <FaUserTie size={18} className=" text-prime_gray " />
          <p className="  ">Profile</p>
        </div>
        <TranslateOnScroll varient=" bottom " translateY={100} duration={700}>
          <p className="text-4xl lg:text-6xl mt-12 ">
            Great code starts with a{" "}
            <span className=" text-prime_Green ">compelling story</span>
          </p>
        </TranslateOnScroll>
        <TranslateOnScroll varient=" bottom " translateY={100} duration={700}>
          <p className=" text-lg lg:text-xl text-gray-300 lg:mt-12 mt-4  ">
            As an accomplished Full Stack Developer, I possess expertise in both
            front-end and back-end technologies, dedicated to crafting intuitive
            user experiences and delivering top-notch code. With hands-on
            experience in frameworks such as React, React Native, Flutter, and
            Node.js, alongside proficiency in cloud platforms like GCP and AWS,
            I bring a comprehensive skill set to the table.
            <br />

            <br /> Having recently contributed to projects at Stoik Digital,
            where I collaborated with cross-functional teams to design and
            implement new features for web and mobile applications, I have honed
            my ability to deliver high-quality solutions. With a {`Master's`} in
            Information Technology and prior experience from an ALM Cloud
            internship, I am keen to leverage my skills and experiences in a new
            role. {`Let's`} engage in a discussion on how I can bring value to
            your project.

          </p>
        </TranslateOnScroll>
      </div>
    </>
  );
}

export default Profile;
