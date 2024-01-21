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

export const skillIcons = [
  {
    position: "top-2 left-10 w-10 ",
    image: react,
  },
  {
    position: "top-14 right-0 w-8 ",
    image: javascript,
  },
  {
    position: "top-60 left-0 w-7 ",
    image: nextjs,
  },
  {
    position: "top-8 right-32 w-5 ",
    image: typescript,
  },
  {
    position: "top-50 left-2 w-5 ",
    image: redux,
  },
  {
    position: "-bottom-2 right-24 w-8 ",
    image: nodejs,
  },
  {
    position: "top-10 left-12 w-10 ",
    image: mongodb,
  },
  {
    position: "bottom-14 left-20 w-8 ",
    image: tailwindcss,
  },
  {
    position: "bottom-2 right-5 w-7 ",
    image: bootstrap,
  },
  {
    position: "top-64 -right-1 w-5  ",
    image: html,
  },
  {
    position: "top-60 right-2 w-5 ",
    image: css,
  },
  {
    position: "bottom-8 right-24 w-10 ",
    image: github,
  },
];

const HeroImage = () => {
  return (
      <div className="group w-[340px] h-[340px] lg:w-[380px] lg:h-[380px] flex-1 flex justify-center items-center relative py-14">
        {/* --------------Hero Image---------------- */}
        <img
          className="w-60 h-60 lg:w-72 lg:h-72 rounded-full group-hover:scale-95 ease-in duration-500"
          src="hero_image.png"  // add you hero_image from puplic folder
          alt="Image"
        />

        {/* --------------- Skill Icons -------------------- */}

        {skillIcons.map((skill, index) => {
          return (
            <img
              key={index}
              className={`absolute z-10 group-hover:rotate-45 ease-in duration-500  ${skill.position}`}
              src={skill.image}
              alt="Icon Image"
            />
          );
        })}
      </div>
  );
};

export default HeroImage;
