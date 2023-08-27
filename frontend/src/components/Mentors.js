import React from 'react'
import bg from '../assets/MentorBG.png'
import MentorCard from './MentorCard'

export default function Mentors() {
  return (
    <div className='h-[100vh]  Mentor flex justify-center flex-col items-center'>
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
  )
}
