import { Link as ScrollLink } from "react-scroll";
// Skill Icons
import react from "../assets/skill_icons/react.svg";
import nextjs from "../assets/skill_icons/nextjs.svg";
import javascript from "../assets/skill_icons/javascript.svg";
import typescript from "../assets/skill_icons/typescript.svg";
import redux from "../assets/skill_icons/redux.svg";
import nodejs from "../assets/skill_icons/nodejs.svg";
import mongodb from "../assets/skill_icons/mongodb.svg";
import tailwindcss from "../assets/skill_icons/tailwindcss.svg";
import bootstrap from "../assets/skill_icons/bootstrap.svg";
import html from "../assets/skill_icons/html.svg";
import css from "../assets/skill_icons/css.svg";
import github from "../assets/skill_icons/github.svg";

// Social Media Icons
import gitHub from "../assets/socialmedia/github.svg";
import linkedin from "../assets/socialmedia/linkedin.svg";
import twitter from "../assets/socialmedia/twitter.svg";
import gmail from "../assets/socialmedia/mail.svg";
import cv from "../assets/socialmedia/cv.svg";
import { cv_url } from "./data";


// ------------------Skills--------------------//
export const skills = [
  {
    title: "React.js",
    image: react,
  },
  {
    title: "Next.js",
    image: nextjs,
  },
  {
    title: "JavaScript",
    image: javascript,
  },
  {
    title: "Typescript.js",
    image: typescript,
  },
  {
    title: "Redux",
    image: redux,
  },
  {
    title: "Node.js",
    image: nodejs,
  },
  {
    title: "MongoDB",
    image: mongodb,
  },
  {
    title: "Tailwind",
    image: tailwindcss,
  },
  {
    title: "Bootstrap",
    image: bootstrap,
  },
  {
    title: "HTML",
    image: html,
  },
  {
    title: "CSS",
    image: css,
  },
  {
    title: "GitHub",
    image: github,
  },
];


// ------------------Social Media--------------------//
export const socialmedias = [
  {
    icon: gitHub,
    address: "https://github.com/Sajomkhan",
  },
  {
    icon: linkedin,
    address: "https://www.linkedin.com/in/saiful-ajom-khan",
  },
  {
    icon: twitter,
    address: "https://twitter.com/SabuzKh10364527",
  },
  {
    icon: cv,
    address: cv_url,
  },
  {
    icon: gmail,
    address: "Contact"
  },
];
