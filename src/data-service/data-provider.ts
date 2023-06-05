import jnjImg from "@/assets/porfolio_imgs/jnj_flooring.webp";
import stockImg from "@/assets/porfolio_imgs/stock.webp";
import investImg from "@/assets/porfolio_imgs/invest.webp";
import diginesImg from "@/assets/porfolio_imgs/digines.webp";
import partyImg from "@/assets/porfolio_imgs/party.webp";
import resonateImg from "@/assets/porfolio_imgs/resonate.webp";

export const personal = {
  name: "Thuvarakan",
  fullName: "Thuvarakan Selvasothy",
  address: "23 Chris Stree, Redbank, QLD-4301",
  based: "Brisbane, QLD",
  phone: "+61 416683460",
  email: "thuvamathu618@gmail.com",
};

export const education = [
  {
    university: "Navitas ",
    degree: "ACS Professional Year Program ",
    major: "Computer Science (PY Program)",
    location: "Brisbane, Queensland, Australia",
    dates: "May 2023 - Present",
  },
  {
    university: "Queensland University of Technology",
    degree: "Masters in Information Technology",
    major: "Software Development",
    location: "Brisbane, Queensland, Australia",
    dates: "Feb 2020 - Dec 2022",
  },
  {
    university: "Jamal Mohamed College",
    degree: "Bachelor of Science",
    major: "Computer science",
    location: "Trichy, Tamil Nadu, India",
    dates: "Jun 2016 - Apr 2019",
  },
];

export const workExperience = [
  {
    position: "Junior Frontend Developer",
    dates: "June 2023 - present",
    company: "Stoik Digital",
    location: "Brisbane, QLD",
  },
  {
    position: "UI/UX Developer",
    dates: "July 2022 - November 2022",
    company: "AML Cloud",
    location: "Melbourne, Victoria",
  },
  {
    position: "Full Stack Developer",
    dates: "March 2021 - June 2021",
    company: "C-Res",
    location: "Brisbane, QLD",
  },
];

export const specializations = [
  {
    header: "Website Design",
    description:
      "I create visually appealing and user-friendly website designs.",
    done: "6 Projects",
    tx: -100,
  },
  {
    header: "Development",
    description:
      "I build websites ready for live deployment using React, Node, Flutter, etc.",
    done: "8 Projects",
    tx: 100,
  },
  {
    header: "Mobile App Development",
    description:
      "I develop powerful mobile applications for iOS and Android platforms.",
    done: "2 Projects",
    tx: -100,
  },
  {
    header: "Deployment",
    description:
      "I efficiently deploy websites and mobile apps for global accessibility.",
    done: "8 Projects",
    tx: 100,
  },
];

export const Projects = [
  {
    title: "JNJ Flooring - Company website",
    img: jnjImg,
    webLink: "https://www.jnjflooring.com.au/",
    color: "#6b9080",
    tx: -100,
  },
  {
    title: "Diginess - Company Website",
    img: diginesImg,
    webLink: "https://main.d1s2ji1jl579xu.amplifyapp.com/",
    color: "#469d89",
    tx: 100,
  },
  {
    title: "Envited - Pre-Employment Assessment",
    img: partyImg,
    webLink: "https://main.d2zkllkoxm3q6k.amplifyapp.com/",
    color: "#364958",
    tx: -100,
  },
  {
    title: "Resonate - Pre-Employment Assessment",
    img: resonateImg,
    webLink: "https://main.d33hoh2u1exhrj.amplifyapp.com/",
    color: "#3b6064",
    tx: 100,
  },
  {
    title: "Research & Project - API Mash Up",
    img: investImg,
    webLink: "https://main.dbs9qunfuh5pi.amplifyapp.com/",
    color: "#55828b",
    tx: -100,
  },
  {
    title: "Stock - Stock market Dashboard",
    img: stockImg,
    webLink: "https://main.d1v9v9b8xfnsql.amplifyapp.com/",
    color: "#87bba2",
    tx: 100,
  },
];
