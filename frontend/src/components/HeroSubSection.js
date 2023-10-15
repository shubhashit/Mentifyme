import React from 'react'
import subsec1 from '../assets/subsec1.png'
import subsec2 from '../assets/subsec2.png'
import subsec3 from '../assets/subsec3.png'
import areyou from '../assets/areyou.png'
import subsidebar from '../assets/subsidebar.png'

export default function HeroSubSection() {
  return (
    <>
    <div className='bg-black md:flex flex-col items-center hidden'>
      <div className='mt-6'><img className='w-[18rem]' src={areyou} alt="" /></div>
      <div className='bg-white m-8 mt-0 flex flex-row   p-6 rounded-2xl'>
        <div className='w-[30%] flex flex-col justify-between'>
          <div className='flex flex-row items-center'> 
            <div className='md:text-xl text-lg font-bold md:mr-5 mr-1'>Mental Tensed</div>
            <img className='w-[2rem]' src={subsec1} alt="" />
          </div>
          <div className='text-sm md:text-lg mb-2 mt-2 text-[#7A7A7A]'>Chat anonymously with an expert of your choice. This service is available to you anytime, anywhere.</div>
          <button className='bg-[white] text-[#696DCA] md:pr-4 md:pl-4 md:pt-2 md:pb-2 p-1 text-sm font-semibold border border-[#696DCA] rounded-lg mr-3 w-[8rem]'>Connect Now</button>
        </div>
        <img src={subsidebar} className='h-fit m-2 ml-10 mr-10' alt="" />
        <div className='w-[30%] flex flex-col justify-between'>
          <div className='flex flex-row items-center'> 
            <div className='md:text-xl text-lg font-bold md:mr-5 mr-1'>Emotionally Disturbed</div>
            <img className='w-[2rem]' src={subsec2} alt="" />
          </div>
          <div className='md:text-lg text-sm mb-2 mt-2 text-[#7A7A7A]'>Speak to our experts or get on a call with them. Get personalized attention right when you need it.</div>
          <button className='bg-[white] text-[#696DCA] md:pr-4 md:pl-4 md:pt-2 md:pb-2 p-1 text-sm font-semibold border border-[#696DCA] rounded-lg mr-3 w-[8rem]'>Connect Now</button>
        </div>
        <img src={subsidebar} className='h-fit m-2 ml-10 mr-10' alt="" />
        <div className='w-[30%] flex flex-col justify-between'>
          <div className='flex flex-row items-center'> 
            <div className='md:text-xl text-lg font-bold md:mr-5 mr-1'>Academically Confused</div>
            <img className='w-[2rem]' src={subsec3} alt="" />
          </div>
          <div className='md:text-lg text-sm mb-2 mt-2 text-[#7A7A7A]'>Connect 1-on-1 in-person with an expert of your choice.</div>
          <button className='bg-[white] text-[#696DCA] md:pr-4 md:pl-4 md:pt-2 md:pb-2 p-1 text-sm font-semibold border border-[#696DCA] rounded-lg mr-3 w-[8rem]'>Get Mentorship</button>
        </div>
        
      </div>
      
    </div>
    <div className='block md:hidden'>
        <div className='mt-6'><img className='w-[17rem] m-auto' src={areyou} alt="" /></div>
        <div className='bg-black p-3 pr-4 pl-4 flex flex-col items-center'> 
          <div className='bg-white  rounded-md flex items-center flex-col p-4 pt-4'>
            <div className='flex flex-row items-center'>
              <img className='w-[2rem]' src={subsec1} alt="" />
              <div className='md:text-xl text-lg font-bold md:mr-5 mr-1'>Mental Tensed</div>
            </div>
            <div className='text-lg mb-2 mt-2 text-[#7A7A7A] text-center'>Chat anonymously with an expert of your choice. This service is available to you anytime, anywhere.</div>
            <button className='bg-[white] text-[#696DCA] pr-4 pl-4 pt-2 pb-2  text-sm font-semibold border border-[#696DCA] rounded-lg mr-3 w-[8rem]'>Connect Now</button>
          </div>

          <div className='hidden'>
          
          <div className='bg-white  rounded-md flex items-center flex-col p-4 pt-4'>
            <div className='flex flex-row items-center'>
              <img className='w-[2rem]' src={subsec2} alt="" />
              <div className='md:text-xl text-lg font-bold md:mr-5 mr-1'>Emotionally Disturbed</div>
            </div>
            <div className='text-lg mb-2 mt-2 text-[#7A7A7A] text-center'>Speak to our experts or get on a call with them. Get personalized attention right when you need it.</div>
            <button className='bg-[white] text-[#696DCA] pr-4 pl-4 pt-2 pb-2  text-sm font-semibold border border-[#696DCA] rounded-lg mr-3 w-[8rem]'>Connect Now</button>
          </div>


          <div className='bg-white  rounded-md flex items-center flex-col p-4 pt-4 w-full '>
            <div className='flex flex-row items-center'>
              <img className='w-[2rem]' src={subsec3} alt="" />
              <div className='md:text-xl text-lg font-bold md:mr-5 mr-1'>Academically Confused</div>
            </div>
            <div className='text-lg mb-2 mt-2 text-[#7A7A7A] text-center'>Connect 1-on-1 in-person with an expert of your choice.</div>
            <button className='bg-[white] text-[#696DCA] pr-4 pl-4 pt-2 pb-2  text-sm font-semibold border border-[#696DCA] rounded-lg mr-3 w-[8rem]'>Get Mentorship</button>
          </div>
          </div>

          <div className='mt-3 flex flex-row'>
            <div className='w-3 h-3 rounded-full bg-[#696DCA] mr-2'></div>
            <div className='w-3 h-3 rounded-full bg-[#D9D9D9] mr-2'></div>
            <div className='w-3 h-3 rounded-full bg-[#D9D9D9] mr-2'></div>
          </div>
        </div>
    </div>
    </>
    
  )
}
