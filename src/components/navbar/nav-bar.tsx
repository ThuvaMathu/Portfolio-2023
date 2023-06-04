import React, { ReactNode, useContext } from "react";
import {
  FaHome,
  FaUserTie,
  FaCubes,
  FaShapes,
  FaBriefcase,
  FaEnvelope,
  FaBuffer,
} from "react-icons/fa";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import Tooltip from "../../common/tooltip";
import { MyContext } from "@/src/context/app-context";
export default function NavBar(props: any) {
  const myContextData = useContext(MyContext);
  const { activeSection } = myContextData || {};
  //console.log(activeSection);
  return (
    <>
      <div className=" flex flex-col px-4 py-8 justify-center items-center border border-prime_gray rounded-full gap-6 bg-[#233]   ">
        <Tooltip text="Home">
          <ScrollLink
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <FaHome
              size={25}
              className={` ${
                activeSection === "home"
                  ? " text-prime_Green "
                  : " text-prime_gray "
              } `}
            />
          </ScrollLink>
        </Tooltip>
        <Tooltip text="profile">
          <ScrollLink
            activeClass="active"
            to="profile"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <FaUserTie
              size={25}
              className={` ${
                activeSection === "profile"
                  ? " text-prime_Green "
                  : " text-prime_gray "
              } `}
            />
          </ScrollLink>
        </Tooltip>
        <Tooltip text="Resume">
          <ScrollLink
            activeClass="active"
            to="resume"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <FaBriefcase
              size={25}
              className={` ${
                activeSection === "resume"
                  ? " text-prime_Green "
                  : " text-prime_gray "
              } `}
            />
          </ScrollLink>
        </Tooltip>
        <Tooltip text="Specializations">
          <ScrollLink
            activeClass="active"
            to="spec"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <FaBuffer
              size={25}
              className={` ${
                activeSection === "spec"
                  ? " text-prime_Green "
                  : " text-prime_gray "
              } `}
            />
          </ScrollLink>
        </Tooltip>
        <Tooltip text="Skills">
          <ScrollLink
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <FaShapes
              size={25}
              className={` ${
                activeSection === "skills"
                  ? " text-prime_Green "
                  : " text-prime_gray "
              } `}
            />
          </ScrollLink>
        </Tooltip>
        <Tooltip text="Portfolio">
          <ScrollLink
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <FaCubes
              size={25}
              className={` ${
                activeSection === "portfolio"
                  ? " text-prime_Green "
                  : " text-prime_gray "
              } `}
            />
          </ScrollLink>
        </Tooltip>
        <Tooltip text="Contact">
          <ScrollLink
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <FaEnvelope
              size={25}
              className={` ${
                activeSection === "contact"
                  ? " text-prime_Green "
                  : " text-prime_gray "
              } `}
            />
          </ScrollLink>
        </Tooltip>
      </div>
    </>
  );
}
