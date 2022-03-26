import Image from "next/image";
const Project = ({ project, extra, setExtra }) => {
  return (
    <div className="flex rounded-md flex-col relative w-[90%] shadow-lg pb-2 mx-auto md:w-[30%]">
      <Image
        src={project.src}
        width={200}
        height={210}
        objectFit="contain"
        alt="project"
      />
      <div className="text-center space-y-4">
        <p>{project.desc}</p>
        {extra && <p>{project.extraDesc}</p>}
        <button className="border border-[#0B96FF] px-4 rounded-md">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Project;
