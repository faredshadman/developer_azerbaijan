import AOS from "aos";
import Image from "next/image";
import "aos/dist/aos.css";
import { useEffect } from "react";
const TeamMember = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div
      data-aos="zoom-in"
      className="relative shadow-sm max-w-lg rounded-xl mx-auto overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Image
        src="/img/team_member1.svg"
        alt="team_member"
        width={220}
        height={300}
        objectFit="cover"
      />
      {/* <img src="/img/team_member1.svg" alt="team_member" className="w-full" /> */}
      <div className="py-4 px-2">
        <h2 className="font-bold text-[#003054]">Name Surname</h2>
        <span className="text-[#0B96FF]">Developer</span>
      </div>
    </div>
  );
};

export default TeamMember;
