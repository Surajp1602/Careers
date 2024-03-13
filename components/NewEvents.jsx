import React from 'react'
import Link from 'next/link';

const NewEvents = () => {
  return (
    <div className="container mx-auto ">

      <p className='text-xl font-medium text-gray-500 text-center'>Want to utilize your skills among your peers</p>
      <p className='text-5xl font-bold text-black text-center'>New Events</p>

      <br />
      <br />
     
      <div className=" grid grid-cols-3 gap-16">

        <div className='flex flex-col gap-5 items-center bg-[#7b6cd8] px-16 py-10 rounded-3xl'>

            <p className='text-2xl font-bold'>Hackathon</p>

            <p className='text-white font-bold text-center'>Unlock innovation: Code, Create, Collaborate! Join our Hackathon to tackle real-world challenges. Prizes, networking, and endless possibilities await!</p>

            
            <Link href="https://www.coursera.org/specializations/java-fullstack">
            <button className='btn bg-[#000000] text-white rounded-full border-none w-32'>Enroll</button>
            </Link>

        </div>


        <div className='flex flex-col gap-5 items-center bg-[#7b6cd8] px-16 py-10 rounded-3xl'>

            <p className='text-2xl font-bold'>Debate </p>

            <p className='text-white font-bold text-center'>Engage minds! Debate: Fueling Critical Discourse. Join the Clash of Ideas. Date, Time, Venue. Be There</p>

            <Link href="https://www.coursera.org/specializations/mean-stack-developer-mongodb-expressjs-angularjs-nodejs">
            <button className='btn bg-[#000000] text-white rounded-full border-none w-32'>Enroll</button>
            </Link>

        </div>

        <div className='flex flex-col gap-5 items-center bg-[#7b6cd8] px-16 py-10 rounded-3xl'>

            <p className='text-2xl font-bold'>Mock Aptitude</p>

            <p className='text-white font-bold text-center'>Unlock Your Potential: Join our Mock Aptitude Challenge! Test your skills, win prizes, and kickstart your career journey!</p>

            <Link href="https://www.coursera.org/specializations/cloud-computing">
            <button className='btn bg-[#000000] text-white rounded-full border-none w-32'>Enroll</button>
            </Link>

        </div>

      </div>
    
    </div>
  )
}

export default NewEvents
