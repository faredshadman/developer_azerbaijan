import Image from "next/image";
const arr = new Array(10).fill("foo");
console.log(arr);
const Team = () => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <h1 className="text-[#003054] text-5xl font-bold text-center mb-10">
        Meet our team
      </h1>
      <div className="flex flex-wrap justify-between flex-col space-y-0 sm:flex-row ">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
          <div key={i} className="w-[200px] mx-auto lg:w-[16%] mb-4 rounded-md">
            <Image
              src="/img/team_member1.svg"
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              alt="member_photo"
            />
            <div className="px-6">
              <h2 className="font-bold text-[#003054]">Name Surname</h2>
              <span className="text-[#0B96FF]">Developer</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
