import { MyContext } from "@/src/context/app-context";
import Link from "next/link";
import React, { Children, useContext } from "react";
import {
  FaHome,
  FaUserTie,
  FaCubes,
  FaShapes,
  FaBriefcase,
  FaEnvelope,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaBuffer,
} from "react-icons/fa";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function MinNavItems() {
  const myContextData = useContext(MyContext);
  const { activeSection } = myContextData || {};
  const commonClass = (size: string, name: string): string => {
    return `${
      activeSection === name ? " text-prime_Green " : " text-prime_gray "
    } ${size} `;
  };
  return (
    <>
      <div className=" ml-24 mt-24 flex flex-col gap-6 text-prime_gray ">
        <p className=" text-xl mb-4 "> Menu </p>
        <ScrollLink
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Menu>
            <FaHome className={commonClass("text-xl", "home")} />
            <p className={commonClass(" text-lg ", "home")}>Home</p>
          </Menu>
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="profile"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Menu>
            <FaUserTie className={commonClass("text-xl", "profile")} />
            <p className={commonClass("text-lg", "profile")}>Profile</p>
          </Menu>
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="resume"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Menu>
            <FaBriefcase className={commonClass("text-xl", "resume")} />
            <p className={commonClass("text-lg", "resume")}>Resume</p>
          </Menu>
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="spec"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Menu>
            <FaBuffer className={commonClass("text-xl", "spec")} />
            <p className={commonClass("text-lg", "spec")}>Specialisation</p>
          </Menu>
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Menu>
            <FaShapes className={commonClass("text-xl", "skills")} />
            <p className={commonClass("text-lg", "skills")}>Skils</p>
          </Menu>
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Menu>
            <FaCubes className={commonClass("text-xl", "portfolio")} />
            <p className={commonClass("text-lg", "portfolio")}>Portfolio</p>
          </Menu>
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Menu>
            <FaEnvelope className={commonClass("text-xl", "contact")} />
            <p className={commonClass("text-lg", "contact")}>Contact</p>
          </Menu>
        </ScrollLink>
        <p className=" text-xl mt-4 "> Social </p>
        <div className=" flex flex-row gap-5 ">
          {/* <FaGithub size={20} />
          <FaLinkedin size={20} />
          <FaTwitter size={20} /> */}
          <Link href="https://github.com/ThuvaMathu" target="_blank">
            <FaGithub size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/thuvarakan-selvasothy/"
            target="_blank"
          >
            <FaLinkedin size={20} />
          </Link>
          <Link href="https://twitter.com/TSelvasothy" target="_blank">
            <FaTwitter size={20} />
          </Link>
        </div>
      </div>
    </>
  );
}

function Menu({ children }: any) {
  return (
    <>
      <div className=" flex flex-row gap-2 justify-start items-center  ">
        {children}
      </div>
    </>
  );
}
