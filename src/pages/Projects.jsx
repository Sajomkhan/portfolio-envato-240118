import { projects } from "../data/data";
const sortedArray = projects.slice().sort((a, b) => a.projectId - b.projectId);

const Projects = () => {
  return (
    <section id="Projects" className="flex flex-col gap-12  justify-center">
      <h2 className="text-center font-bold ">My Projects & Works</h2>

      <div className="flex flex-wrap justify-center gap-16 lg:px-10">
        {sortedArray.map((project) => {
          const { _id, title, key_techs, github, live, desc, image } = project;
          console.log(project);

          return (
            <div key={_id}>
              <div className="flex flex-col max-w-[330px] section_color shadow-lg py-2 px-1 rounded-xl hover:scale-105 duration-500">
                <div className="w-full h-[200px]">
                  <img
                    src={image}
                    alt="Projects Nameplate"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-4 mx-2 my-4">
                  <p className="text-lg font-bold">{title}</p>
                  <div>
                    <p className="font-semibold primary_text">Key Technologies and Tools:</p>
                    <p className=" text-sm">{key_techs?.join(", ")}</p>
                  </div>
                  <p className=" text-sm">{desc}</p>

                  <div className="mt-3 flex items-center gap-6">
                    <a href={github} target="blank" className="btnn_sm primary_bg">
                      GitHub
                    </a>
                    <a href={live} target="blank" className="btnn_sm danger_bg px-5">
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
