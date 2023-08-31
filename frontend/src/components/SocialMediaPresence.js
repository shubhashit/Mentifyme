import React from 'react'
import LineLeft from '../assets/LineLeft.png'
import LineRight from '../assets/LineRight.png'
import StudentsCard from './StudentsCard'

export default function SocialMediaPresence() {
  return (
    <div className='h-[100vh] '>
      <div className='flex flex-row justify-between items-center mt-4'>
        <img src={LineLeft } className='h-4 w-1/4' alt="" />
        <div className='text-5xl font-bold'>Our <span className='text-[#696DCA]'>Social Media</span> Presence</div>
        <img src={LineRight } className='h-4 w-1/4' alt="" />
      </div>
      <div className='flex flex-row justify-between items-center h-4/5 m-20'>
        <StudentsCard></StudentsCard>
        <StudentsCard></StudentsCard>
        <StudentsCard></StudentsCard>
      </div>
    </div>
  )
}
