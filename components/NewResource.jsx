import React from "react";
import Link from "next/link";

const NewResource = () => {
  return (
    <div className="container mx-4">
      <p className="text-xl font-medium text-gray-500 text-center">
        Want to keep up with new technologies
      </p>
      <p className="text-5xl font-bold text-black text-center">New Resources</p>

      <br />
      <br />

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col justify-between gap-3 md:gap-6 items-center bg-[#7b6cd8] px-8 md:px-6 py-6 md:py-10 rounded-3xl">
          <p className="text-3xl md:text-4xl font-bold">Java Developer</p>

          <p className="text-white text-lg md:font-bold text-center">
            Master Java programming fundamentals and advanced concepts in our
            comprehensive developer course{" "}
          </p>

          <Link href="https://www.coursera.org/specializations/java-fullstack">
            <button className="btn bg-[#000000] text-white rounded-3xl border-none w-32 px-4 py-2">
              Get started
            </button>
          </Link>
        </div>

        <div className="flex flex-col justify-between gap-3 md:gap-6 items-center bg-[#7b6cd8] px-8 md:px-6 py-6 md:py-10 rounded-3xl">
          <p className="text-3xl md:text-4xl font-bold">MEAN Developer</p>

          <p className="text-white text-lg md:font-bold text-center">
            Learn MEAN stack: MongoDB, Express.js, Angular.js, Node.js. Develop
            full-stack web apps. Start now!
          </p>

          <Link href="https://www.coursera.org/specializations/mean-stack-developer-mongodb-expressjs-angularjs-nodejs">
            <button className="btn bg-[#000000] text-white rounded-3xl border-none w-32 px-4 py-2">
              Get started
            </button>
          </Link>
        </div>

        <div className="flex flex-col justify-between gap-3 md:gap-6 items-center bg-[#7b6cd8] px-8 md:px-6 py-6 md:py-10 rounded-3xl">
          <p className="text-3xl md:text-4xl font-bold">Cloud Computing</p>

          <p className="text-white text-lg md:font-bold text-center">
            Explore Cloud Computing: Concepts, Deployment, Architecture,
            Services & Management in Modern IT Environments.
          </p>

          <Link href="https://www.coursera.org/specializations/cloud-computing">
            <button className="btn bg-[#000000] text-white rounded-3xl border-none w-32 px-4 py-2">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewResource;
