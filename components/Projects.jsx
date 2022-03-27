import Project from "./Project";
import { useState } from "react";
const projects = [
  {
    id: 0,
    src: "/img/project.svg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    extraDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ullam corporis! Dicta laboriosam ducimus sit culpa dolore quibusdam corporis earum.",
  },
  {
    id: 1,
    src: "/img/project.svg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    extraDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ullam corporis! Dicta laboriosam ducimus sit culpa dolore quibusdam corporis earum.",
  },
  {
    id: 2,
    src: "/img/project.svg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    extraDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ullam corporis! Dicta laboriosam ducimus sit culpa dolore quibusdam corporis earum.",
  },
];
const Projects = () => {
  const [extra, setExtra] = useState(false);
  const [extraProject, setExtraProject] = useState(false);
  return (
    <section className="bg-[#F0F3F4] py-10">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl text-center pb-10 font-bold text-[#003054]">
          Our Projects
        </h1>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-between mb-10">
          {projects.map((project) => (
            <Project
              key={project.id}
              extra={extra}
              setExtra={setExtra}
              project={project}
            />
          ))}
        </div>
        {extraProject && (
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-between mb-10">
            {projects.map((project) => (
              <Project
                key={project.id}
                extra={extra}
                setExtra={setExtra}
                project={project}
              />
            ))}
          </div>
        )}
        <button
          onClick={() => setExtraProject(!extraProject)}
          className="px-6 bg-[#0B96FF] text-white rounded-lg">
          {extraProject ? "Hide" : "See More"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
