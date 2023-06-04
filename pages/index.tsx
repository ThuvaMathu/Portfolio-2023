import useWindowDimensions from "@/src/common/get-dimention";
import Contact from "@/src/components/contact";
import Home from "@/src/components/home";
import MySKills from "@/src/components/my-skills";
import MySpec from "@/src/components/my-spec";
import MiniScrNavBar from "@/src/components/navbar/mini-scr-nav";
import NavBar from "@/src/components/navbar/nav-bar";
import PersonalHeader from "@/src/components/personal-header";
import Portfolio from "@/src/components/portfolio";
import Profile from "@/src/components/profile";
import Resume from "@/src/components/resume";
import { MyContext } from "@/src/context/app-context";
import React, { Fragment, useContext, useEffect, useState } from "react";

export default function Main() {
  const { width, height } = useWindowDimensions();
  const myContextData = useContext(MyContext);
  const { activeSection, setSection } = myContextData || {};
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      //console.log(sections);

      sections.forEach((section) => {
        const { top, height } = section.getBoundingClientRect();
        const sectionId = section.getAttribute("id");

        if (top >= 0 && top < height / 2) {
          setSection!(sectionId || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <div className=" w-full min-h-screen h-full flex flex-col xl:flex-row justify-center items-center bg-bg_gray relative p-4 overflow-hidden scroll-behaviour">
        {/* Personal header */}
        <div className=" xl:block hidden fixed left-6 top-5 ">
          <PersonalHeader />
        </div>
        <div className=" xl:hidden mt-10 ">
          <PersonalHeader />
        </div>

        {/* nav bar  */}
        <div className=" xl:flex hidden fixed top-0 right-0 w-1/12 h-screen justify-center xl:items-center ">
          <NavBar />
        </div>
        <div className=" xl:hidden ">
          <MiniScrNavBar />
        </div>
        <div className=" w-full xl:ml-[25rem] xl:mr-24 p-2 gap-2 flex flex-col justify-center items-center ">
          <section
            id="home"
            className=" xl:mt-0 mt-10 mb-6 w-full max-w-[700px] min-h-screen h-full flex justify-center items-center  "
          >
            <Home />
          </section>
          <section
            id="profile"
            className=" xl:mt-0 mt-10 mb-6 w-full max-w-[700px]  h-full flex justify-center items-start py-20  "
          >
            <Profile />
          </section>
          <section
            id="resume"
            className=" xl:mt-0 mt-10 mb-6 w-full max-w-[700px] min-h-screen h-full flex justify-center items-center  "
          >
            <Resume />
          </section>
          <section
            id="spec"
            className=" xl:mt-10 mt-10 mb-6 w-full max-w-[700px] min-h-screen h-full flex justify-center items-center  "
          >
            <MySpec />
          </section>
          <section
            id="skills"
            className=" xl:mt-0 mt-10 mb-6 w-full max-w-[700px] min-h-screen h-full flex justify-center items-center  "
          >
            <MySKills />
          </section>
          <section
            id="portfolio"
            className=" xl:mt-0 mt-10 mb-6 w-full max-w-[700px] min-h-screen h-full flex justify-center items-center  "
          >
            <Portfolio />
          </section>
          <section
            id="contact"
            className=" xl:mt-0 mt-10 mb-6 w-full max-w-[700px] min-h-screen h-full flex justify-center items-center  "
          >
            <Contact />
          </section>
        </div>
      </div>
    </Fragment>
  );
}
