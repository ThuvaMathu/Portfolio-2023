import jnjImg from "@/assets/porfolio_imgs/jnj_flooring.webp";
import stockImg from "@/assets/porfolio_imgs/stock.webp";
import investImg from "@/assets/porfolio_imgs/invest.webp";
import diginesImg from "@/assets/porfolio_imgs/digines.webp";
import partyImg from "@/assets/porfolio_imgs/party.webp";
import resonateImg from "@/assets/porfolio_imgs/resonate.webp";
import axioWeb from "@/assets/porfolio_imgs/axio_website.png";
import axioApp from "@/assets/porfolio_imgs/axio_app.png";
import { StaticImageData } from "next/image";

interface IProjectData {
  title: string;
  img: StaticImageData;
  webLink: string;
  color: string;
  tx: number;
  tech: string;
  des: string;
}

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
    position: "Software Developer",
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
    header: "UI/UX Design",
    description:
      "I create visually appealing and user-friendly website designs.",
    done: "6 Projects",
    tx: -100,
  },
  {
    header: "Development",
    description:
      "I build websites ready for live deployment using React, Next, Flutter, etc.",
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

export const Projects: IProjectData[] = [
  {
    title: "Axio - Company website",
    img: axioWeb,
    webLink: "https://axiofinance.com.au/",
    color: "#464731",
    tx: -100,
    tech: "Next.js, Tailwind, TypeScript, AWS and GCP",
    des: "This website represents a financial firm integrating an AI chatbot for tailored financial assistance. It features a blog section with the latest company updates, all optimized for enhanced search engine visibility.",
  },
  {
    title: "Axio- Company Application",
    img: axioApp,
    webLink: "https://app.axiofinance.com.au/",
    color: "#3c4731",
    tx: 100,
    tech: "React.js, Tailwind, Python, TypeScript and AWS",
    des: "This web application enables users to apply for diverse loans and manage their applications effectively via a user-friendly dashboard. With easy navigation and comprehensive control, users can optimize their borrowing experience.",
  },
  {
    title: "JNJ Flooring - Company website",
    img: jnjImg,
    webLink: "https://www.jnjflooring.com.au/",
    color: "#314733",
    tx: -100,
    tech: "Next.js, Tailwind, TypeScript, and AWS",
    des: "This website serves as a platform for JNJ Flooring to effectively present its flooring services, featuring a comprehensive gallery and up-to-date information on their latest successfully executed projects.",
  },
  {
    title: "Envited - Pre-Employment Assessment",
    img: partyImg,
    webLink: "https://main.d2zkllkoxm3q6k.amplifyapp.com/",
    color: "#31473e",
    tx: -100,
    tech: "React.js, Material UI and AWS",
    des: "I created this website for pre-interview assessments. Users can create events and easily share them with friends, streamlining the planning process and facilitating seamless coordination for various gatherings and activities.",
  },
];
export const blogs = [
  {
    title: "Creating a React app",
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
