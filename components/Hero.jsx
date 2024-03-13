import React from "react";

import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="md:container mx-0 lg:mx-auto  my-10">
      <div className="bg-[#ddddff] px-8 py-12 lg:px-16 lg:py-10  rounded-3xl">
        <Navbar />

        <br />
        <br />

        <div className="flex flex-col justify-between lg:flex-row items-center">
          <div className="flex flex-col gap-4 my-6 lg:gap-10">
            <div className="text-5xl font-medium">
              <h1 className="head_text ">
                Discover and <br />
                Explore!
                <br className="max-md:hidden" />
                <span className="purple_gradient text-center">AISSMS COE</span>
                <p className="desc">
                  Careers is a website for students of AISSMS COE <br /> for
                  setting their path and getting guidance for career.
                </p>
              </h1>
            </div>
          </div>

          <img
            src="/images/smg.png"
            alt="img1"
            className="flex w-3/4 md:w-2/3 lg:w-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
