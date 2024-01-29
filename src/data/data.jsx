const git_url = "Set your github url here"; // SET YOUR GITHUB URL
const linkedin_url = "Set your linkedin url here"; // SET YOUR LINKEDIN URL
const twiter_url = "Set your twiter url here"; // SET YOUR TWITER URL
const cv_url = "Set your cv url here"; // SET YOUR CV URL

export const socialmedias = [
  {
    // ALL THE ICON LINKS ARE TAKEN FROM PUBLIC DERECTORY
    icon: "/socialmedia_icon/github.svg",
    address: git_url,
  },
  {
    icon: "/socialmedia_icon/linkedin.svg",
    address: linkedin_url,
  },
  {
    icon: "/socialmedia_icon/twitter.svg",
    address: twiter_url,
  },
  {
    icon: "/socialmedia_icon/cv.svg",
    address: cv_url,
  },
  {
    icon: "/socialmedia_icon/mail.svg",
    address: "Contact",
  },
];

// ------------------Data for Skills Section--------------------//
export const skills = [
  // ALL THE IMAGE LINKS ARE TAKEN FROM PUBLIC DERECTORY
  {
    title: "React",
    image: "/skill_icons/react.svg",
  },
  {
    title: "Nextjs",
    image: "/skill_icons/nextjs.svg",
  },
  {
    title: "Javascript",
    image: "/skill_icons/javascript.svg",
  },
  {
    title: "Typescript",
    image: "/skill_icons/typescript.svg",
  },
  {
    title: "Redux",
    image: "/skill_icons/redux.svg",
  },
  {
    title: "Nodejs",
    image: "/skill_icons/nodejs.svg",
  },
  {
    title: "Mongodb",
    image: "/skill_icons/mongodb.svg",
  },
  {
    title: "Tailwindcss",
    image: "/skill_icons/tailwindcss.svg",
  },
  {
    title: "Bootstrap",
    image: "/skill_icons/bootstrap.svg",
  },
  {
    title: "HTML",
    image: "/skill_icons/html.svg",
  },
  {
    title: "CSS",
    image: "/skill_icons/css.svg",
  },
  {
    title: "GitHub",
    image: "/skill_icons/github.svg",
  },
];

// ------------------Data for Hero Section --------------------//
// CHANGE DATA AS PER YOU REQUIREMENT
export const hero = {
  headline: "I'm Saiful Ajom Khan",
  skills_initiative: "I am into",
  skills: [
    "MERN Development",
    "Frontend Development",
    "Full Stack Development",
  ],
  desc: "I specialize in Full Stack Web Development, where my passion lies in crafting responsive and user-friendly web applications. I prioritize meticulous attention to detail, scalability, and performance to ensure that every project I undertake exceeds client expectations.",
};

// ------------------Data for About Section --------------------//
// CHANGE DATA AS PER YOU REQUIREMENT
export const about = {
  name: "Saiful Ajom Khan",
  education: "B.Sc. Engineer",
  address: "Barishal, Bangladesh.",
  phone: "+112-22334455",
  email: "sajomkhan@gmail.com",
  positon: "MERN Developer",
  desc: "Experienced Full Stack Web Developer with 3+ years of expertise in crafting scalable web applications. Proficient in a wide range of technologies, I specialize in building dynamic and responsive solutions using the latest tools and frameworks.\n\nTechnical Skills: JavaScript, React.js, Next.js, TypeScript, Node.js, Express.js, Prisma, MongoDB, Redux, Tailwindcss, Bootstrap, HTML, CSS, SASS, GitHub, Figma, Canva, Adobe Photoshop, Adobe Illustrator.\n\nMy proficiency in frontend technologies, including React.js and Next.js, Redux enables me to create engaging user interfaces, while my strong backend skills with Node.js and Express.js ensure seamless integration server-side functionalities.",
};

// -------------------- Data for Project Section -------------------------------//
export const projects = [
  // CHANGE DATA AS PER YOU REQUIREMENT
  {
    projectId: "30",
    title: " E-Commerce Food Shop App (UI/UX Part)",
    tech: "MERN Technology",
    key_techs: ["React.js", "Tailwindcss", "Redux", "Material UI"],
    desc: "The project is fully user-friendly and responsive for both desktop and mobile devices. It includes shopping cart functionality with real-time updates using Redux. The design includes fully functional product filtering by categories, a catalog with detailed descriptions, and images.",
    github: "", // SET YOUR PROJECT-1 GITHUB URL LINK IN DOUBLE QUOTATION
    live: "", // SET YOUR PROJECT-1 LIVE URL LINK IN DOUBLE QUOTATION
    image: "/project_images/project_1.jpg", // PROJECT-1 IMAGE LINK IS TAKEN FROM PUBLIC DERECTORY
  },

  {
    projectId: "50",
    title: "Cloth Store App (E-commerce)",
    tech: "MERN Technology",
    key_techs: ["React.js", "Tailwindcss", "Redux", "Material UI"],
    desc: "The project is fully user-friendly and responsive for both desktop and mobile devices. It includes shopping cart functionality with real-time updates using Redux. The design includes fully functional product filtering by categories, a catalog with detailed descriptions, and images.",
    github: "", // SET YOUR PROJECT-2 GITHUB URL LINK IN DOUBLE QUOTATION
    live: "", // SET YOUR PROJECT-2 LIVE URL LINK IN DOUBLE QUOTATION
    image: "/project_images/project_2.jpg", // PROJECT-2 IMAGE LINK IS TAKEN FROM PUBLIC DERECTORY
  },

  {
    projectId: "60",
    title: "Social Media App (UI/UX)",
    tech: "MERN Technology",
    key_techs: ["React.js", "CSS", "React-icons"],
    desc: "In this project, my sole focus was on enhancing the design for a better look, using plain CSS. It's not responsive, as I aimed to maximize the potential of CSS for the best design outcomes.",
    github: "", // SET YOUR PROJECT-2 GITHUB URL LINK IN DOUBLE QUOTATION
    live: "", // SET YOUR PROJECT-2 LIVE URL LINK IN DOUBLE QUOTATION
    image: "/project_images/project_2.jpg", // PROJECT-2 IMAGE LINK IS TAKEN FROM PUBLIC DERECTORY
  },
];

// ------------------ Data for Education Section --------------------//

export const education = {
  // CHANGE DATA AS PER YOU REQUIREMENT
  institution: "The Institution of Engineers Bangladesh (IEB)",
  lastEducation: "B.Sc. Engineer",
  duration: "2006-2010",
  subject: " Electrical & Electronics (EEE)",
};

// ------------------ Data for Experiences Section --------------------//

export const experiences = [
  // CHANGE DATA AS PER YOU REQUIREMENT
  {
    position: "Aspiring Professional with Notable Project Experience",
    company: "Personal Project Endeavors",
    duration: "Oct 2020 - till now",
    proficiencies: [
      "I have independently completed all aspects of the projects I've worked on, including frontend, backend, database management, and project planning.",
      "I dedicated 3+ years to rigorous self-training in MERN technology, and now I am fully confident in my abilities to make valuable contributions and provide support to a team.",
      "I possess proficiency in various aspects of ReactJS, including routing, state management, component creation, context API usage, Hooks usage and seamless integration of APIs into the frontend.",
      "In the backend, I handle server creation, credential management, database administration, and the seamless upload of files or images to Cloudinary, all achieved using Express.js and MongoDB.",
    ],
  },

  {
    position: "Engineer (Electrical & Automation)",
    company: "Bashundhara Group, Bangladesh",
    duration: "Nov 2010 - Sep 2020",
    proficiencies: [
      "Programing automation technology (PLC & HMI) of industrial machine & utility",
      "Trouble shooting & maintenance of industrial machine",
      "Despite my successful career in this field, I nurtured a strong interest in programming. Over the past 2.5 years, I embarked on an intensive self-training journey with MERN technology. Today, I am confident in my proficiency and am eager to leverage my skills to contribute to and support a dynamic team.",
    ],
  },
];
