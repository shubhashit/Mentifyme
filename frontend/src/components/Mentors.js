import React from 'react'
import bg from '../assets/MentorBG.png'
import rightclick from '../assets/rightclick.png'
import leftclick from '../assets/leftclick.png'
import MentorCard from './MentorCard'
import MentorCardMin from './MentorCardMin'

export default function Mentors() {
  return (
    <>
    <div className='h-[100vh]  Mentor md:flex justify-center flex-col items-center hidden'>
          <div className='text-5xl font-bold text-white'>Amazing <span className='text-[#696DCA]'>Mentors</span> to Guide You</div>
            <div className='flex flex-row h-4/5 m-3'>
                <MentorCard
                  name="Yash Sharma"
                  college="IIT Bombay"
                ></MentorCard>
                <MentorCard
                  name="Bhavya Singh"
                  college="AIIMS Bhopal"
                ></MentorCard>
                <MentorCard
                  name="Nikita Gupta"
                  college="IIT Roorkee"
                ></MentorCard>
                <MentorCard
                  name="Akshat Yadav"
                  college="AIIMS DELHI"
                ></MentorCard>
            </div>
          <div className='flex flex-row'>
              <div className='w-4 h-4 rounded-full bg-[#696DCA] mr-2'></div>
              <div className='w-4 h-4 rounded-full bg-[#D9D9D9] mr-2'></div>
              <div className='w-4 h-4 rounded-full bg-[#D9D9D9] mr-2'></div>
          </div>
    </div>
    <div className='h-fit  Mentor flex justify-center flex-col items-center md:hidden'>
          <div className='text-lg mt-6 md:text-5xl font-bold text-white text-center'>Amazing <span className='text-[#696DCA]'>Mentors</span> to Guide You</div>
            <div className='flex flex-row h-4/5 m-3 justify-between'>
                <MentorCardMin
                  name="Yash Sharma"
                  college="IIT Bombay"
                ></MentorCardMin>
                <MentorCardMin
                  name="Bhavya Singh"
                  college="AIIMS Bhopal"
                ></MentorCardMin>
                {/* <MentorCard
                  name="Nikita Gupta"
                  college="IIT Roorkee"
                ></MentorCard>
                <MentorCard
                  name="Akshat Yadav"
                  college="AIIMS DELHI"
                ></MentorCard> */}
            </div>
        <div className='flex flex-row justify-center items-center mb-10'>
          <img src={leftclick} className='mr-10' alt="" />
          <div className='w-4 h-4 rounded-full bg-[#696DCA] mr-2'></div>
          <div className='w-4 h-4 rounded-full bg-[#D9D9D9] mr-2'></div>
          <div className='w-4 h-4 rounded-full bg-[#D9D9D9] mr-2'></div>
          <img src={rightclick} className='ml-10' alt="" />
        </div>
    </div>
    </>
  )
}
