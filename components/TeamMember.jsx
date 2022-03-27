import React from "react";
const TeamMember = () => {
  return (
    <div className="relative max-w-lg rounded-xl mx-auto overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/img/team_member1.svg" alt="team_member" className="w-full" />
      <div className="py-4">
        <h2 className="font-bold text-[#003054]">Name Surname</h2>
        <span className="text-[#0B96FF]">Developer</span>
      </div>
    </div>
  );
};

export default TeamMember;
