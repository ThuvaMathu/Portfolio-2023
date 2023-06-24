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
          <p className=" text-lg lg:text-xl text-gray-500 lg:mt-12 mt-4  ">
            I am an experienced Full Stack Developer proficient in front-end and
            back-end technologies, specializing in creating intuitive user
            experiences and delivering high-quality code.
            <br />
            <br /> My expertise includes React, React Native, Flutter, Node.js,
            and cloud platforms like GCP and AWS. With a {"Master's"} in
            Information Technology and collaborative experience from an ALM
            Cloud internship, I am eager to leverage my skills in a new role.{" "}
            {"Let's"}
            discuss how I can contribute to your project.
          </p>
        </TranslateOnScroll>
      </div>
    </>
  );
}

export default Profile;
