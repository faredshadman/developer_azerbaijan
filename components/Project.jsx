import Image from "next/image";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Project = ({ project, index }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [extra, setExtra] = useState(false);
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="flex rounded-md flex-col relative shadow-lg pb-2 mx-auto">
      <Image
        src={project.src}
        width={220}
        height={210}
        objectFit="cover"
        alt="project"
      />
      <div
        className="text-center space-y-4"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-offset="0">
        <p className="text-justify px-4">{project.desc}</p>
        {extra && <p className="text-justify px-4">{project.extraDesc}</p>}
        <button
          onClick={() => setExtra(!extra)}
          className="border border-[#0B96FF] px-4 rounded-md">
          {extra ? "Hide" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default Project;
