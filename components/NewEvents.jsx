import React from "react";
import Link from "next/link";

const NewEvents = () => {
  return (
    <div className="container mx-4 ">
      <p className="text-xl font-medium text-gray-500 text-center">
        Want to utilize your skills among your peers
      </p>
      <p className="text-5xl font-bold text-black text-center">New Events</p>

      <br />
      <br />

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col justify-between gap-3 md:gap-6 items-center bg-[#7b6cd8] px-8 md:px-6 py-6 md:py-10 rounded-3xl">
          <p className="text-3xl md:text-4xl font-bold">Hackathon</p>

          <p className="text-white text-lg md:font-bold text-center">
            Unlock innovation: Code, Create, Collaborate! Join our Hackathon to
            tackle real-world challenges. Prizes, networking, and endless
            possibilities await!
          </p>

          <Link href="https://www.coursera.org/specializations/java-fullstack">
            <button className="btn bg-[#000000] text-white rounded-3xl border-none w-32 px-4 py-2">
              Enroll
            </button>
          </Link>
        </div>

        <div className="flex flex-col justify-between gap-3 md:gap-6 items-center bg-[#7b6cd8] px-8 md:px-6 py-6 md:py-10 rounded-3xl">
          <p className="text-3xl md:text-4xl font-bold">Debate </p>

          <p className="text-white text-lg md:font-bold text-center">
            Engage minds! Debate: Fueling Critical Discourse. Join the Clash of
            Ideas. Date, Time, Venue. Be There
          </p>

          <Link href="https://www.coursera.org/specializations/mean-stack-developer-mongodb-expressjs-angularjs-nodejs">
            <button className="btn bg-[#000000] text-white rounded-3xl border-none w-32 px-4 py-2">
              Enroll
            </button>
          </Link>
        </div>

        <div className="flex flex-col justify-between gap-3 md:gap-6 items-center bg-[#7b6cd8] px-8 md:px-6 py-6 md:py-10 rounded-3xl">
          <p className="text-3xl md:text-4xl font-bold">Mock Aptitude</p>

          <p className="text-white text-lg md:font-bold text-center">
            Unlock Your Potential: Join our Mock Aptitude Challenge! Test your
            skills, win prizes, and kickstart your career journey!
          </p>

          <Link href="https://www.coursera.org/specializations/cloud-computing">
            <button className="btn bg-[#000000] text-white rounded-3xl border-none w-32 px-4 py-2">
              Enroll
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewEvents;
