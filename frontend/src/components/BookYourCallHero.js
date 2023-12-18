import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function BookYourCallHero() {
  const navigate = useNavigate();
  function topayment(){
    navigate('/payment')
  }
  return (
    <div className='p-2 md:flex md:flex-col md:items-center md:pb-0'>
          <div className='text-2xl md:text-5xl font-semibold text-start md:text-center m-auto mt-4'>Unlock Your Potential with 1-on-1 Personal Calls with IITians and NEET Toppers!</div>
          <div className='text-sm md:text-2xl text-[#3E4A59] mt-3 md:mt-8 text-start md:text-center m-auto'>Are you aspiring to excel in the world of competitive exams like JEE or NEET? Look no further! At MentifyMe</div>
          <div className='flex flex-row items-center mt-4'>
              <div className='text-xs md:text-base font-medium text-white pt-3 pb-3 pl-6 pr-6 bg-[#696DCA] w-[13rem] text-center m-2 rounded '><button onClick={topayment}>Book Your Call Now</button></div>
              <div className='text-xs md:text-base font-medium text-[#696DCA] border border-[#696DCA] pt-3 pb-3 pl-6 pr-6 bg-white   w-[13rem] text-center m-2 rounded'><button>Contact Us</button></div>
          </div>
    </div>
  )
}
