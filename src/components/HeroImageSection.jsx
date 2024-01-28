export const skillIcons = [
  // ALL THE IMAGE LINKS ARE TAKEN FROM PUBLIC DERECTORY
  {
    position: "top-2 left-10 w-10 ",
    image: "/skill_icons/react.svg",
  },
  {
    position: "top-14 right-0 w-8 ",
    image: "/skill_icons/javascript.svg",
  },
  {
    position: "top-60 left-0 w-7 ",
    image: "/skill_icons/nextjs.svg",
  },
  {
    position: "top-8 right-32 w-5 ",
    image: "/skill_icons/typescript.svg",
  },
  {
    position: "top-50 left-2 w-5 ",
    image: "/skill_icons/redux.svg",
  },
  {
    position: "-bottom-2 right-24 w-8 ",
    image: "/skill_icons/nodejs.svg",
  },
  {
    position: "top-10 left-12 w-10 ",
    image: "/skill_icons/mongodb.svg",
  },
  {
    position: "bottom-14 left-20 w-8 ",
    image: "/skill_icons/tailwindcss.svg",
  },
  {
    position: "bottom-2 right-5 w-7 ",
    image: "/skill_icons/bootstrap.svg",
  },
  {
    position: "top-64 -right-1 w-5  ",
    image: "/skill_icons/html.svg",
  },
  {
    position: "top-60 right-2 w-5 ",
    image: "/skill_icons/css.svg",
  },
  {
    position: "bottom-8 right-24 w-10 ",
    image: "/skill_icons/github.svg",
  },
];

const HeroImageSection = () => {
  return (
    <div className="group w-[340px] h-[340px] lg:w-[380px] lg:h-[380px] flex-1 flex justify-center items-center relative py-14">
      {/* --------------Hero Image---------------- */}
      <img
        className="w-60 h-60 lg:w-72 lg:h-72 rounded-full group-hover:scale-95 ease-in duration-500"
        src="/hero_image.png" // IMAGE LINK IS TAKEN FROM PUBLIC DERECTORY
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

export default HeroImageSection;
