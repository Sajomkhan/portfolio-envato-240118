 const skills = [
  {
    title: "React",
    image: "/public/skill_icons/react.svg",  // first change your image in public folder then input here
  },
  {
    title: "Nextjs",
    image: "/public/skill_icons/nextjs.svg",
  },
  {
    title: "Javascript",
    image: "/public/skill_icons/javascript.svg",
  },
  {
    title: "Typescript",
    image: "/public/skill_icons/typescript.svg",
  },
  {
    title: "Redux",
    image: "/public/skill_icons/redux.svg",
  },
  {
    title: "Nodejs",
    image: "/public/skill_icons/nodejs.svg",
  },
  {
    title: "Mongodb",
    image: "/public/skill_icons/mongodb.svg",
  },
  {
    title: "Tailwindcss",
    image: "/public/skill_icons/tailwindcss.svg",
  },
  {
    title: "Bootstrap",
    image: "/public/skill_icons/bootstrap.svg", 
  },
  {
    title: "HTML",
    image: "/public/skill_icons/html.svg",
  },
  {
    title: "CSS",
    image: "/public/skill_icons/css.svg",
  },
  {
    title: "GitHub",
    image: "/public/skill_icons/github.svg",
  },
];


const Skills = () => {
  return (
    <section id="Home" className="text-2xl section_color h-full flex flex-col justify-center">
      <h1 className="text-center text-3xl font-bold">The Tech Stacks</h1>
      <h3 className="text-center text-xl font-bold mb-8">What in My Skills</h3>
      <div className="flex flex-row flex-wrap justify-center items-center gap-3 lg:gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-2 hover:scale-110 duration-500">
            <div
              title={"React.js"}
              className={
                "h-24 w-24 p-4 md:h-28 md:w-28 rounded-full flex items-center justify-center"
              }>
              <img
                className="w-18 h-18 p-2 object-cover rounded-md bg-gray-100 shadow-lg"
                src={skill.image}
                alt="Icon image"
                width={300}
                height={300}
              />
            </div>
            <p className="text-sm md:text-base">{skill.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;