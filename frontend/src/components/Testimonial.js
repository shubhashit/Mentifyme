import React from 'react'
import silderboxmain from '../assets/premiumPage/silderboxmain.png'
import Quotes from '../assets/premiumPage/Quotes.png'
import Previous from '../assets/premiumPage/Previous.png'
import Next from '../assets/premiumPage/Next.png'
import sliderbox2 from '../assets/premiumPage/sliderbox2.png'

export default function Testimonial() {
  return (
    <div className='flex flex-col items-center overflow-hidden mb-8'>
      <div className='md:flex flex-col items-center hidden'>
        <div className='text-[#696DCA] text-base font-medium' >TESTIMONIAL</div>
        <div className='font-bold text-4xl'>Real Success Stories from Our Grateful Aspirants</div>
      </div>

      <div className='flex justify-center items-center mt-10 '>
        <div className='relative flex flex-row items-center justify-between w-[100vw] md:w-[50vw] p-3 mr-12 ml-12 opacity-20'>
          <img src={silderboxmain} className='w-24 h-24 md:w-auto md:h-auto' alt="" />
          <div className='flex flex-col justify-start ml-4 mt-5 relative '>
            <div className='text-[0.65rem] md:text-base font-normal'>Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.</div>
            <div className='font-medium text-xs md:text-base mt-3'>Kyle Merwin</div>
            <div className='font-normal text-[0.625rem] md:text-sm text-[#878787] mt-2'>CO-owner</div>
            <div className='absolute -right-0 md:-right-5 -top-5'><img src={Quotes} className='w-4 h-4 md:w-auto md:h-auto' alt="" /></div>
          </div>
        </div>
        <div className='relative flex flex-row items-center justify-between w-[100vw] md:w-[50vw] p-3 mr-12 ml-12'>
          <img src={silderboxmain} className='w-24 h-24 md:w-auto md:h-auto' alt="" />
          <div className='flex flex-col justify-start ml-4 mt-5 relative'>
            <div className='text-[0.65rem] md:text-base font-normal'>Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.</div>
            <div className='font-medium text-xs md:text-base mt-3'>Kyle Merwin</div>
            <div className='font-normal text-[0.625rem] md:text-sm text-[#878787] mt-2'>CO-owner</div>
            <div className='absolute -right-0 md:-right-5 -top-5'><img src={Quotes} className='h-4 w-4 md:w-auto md:h-auto' alt="" /></div>
          </div>
        </div>
        <div className='relative flex flex-row items-center justify-between w-[100vw] md:w-[50vw] p-3 mr-12 ml-12 opacity-20'>
          <img src={sliderbox2} className='w-24 h-24 md:w-auto md:h-auto' alt="" />
          <div className='flex flex-col justify-start ml-4 mt-5 relative'>
            <div className='text-[0.65rem] md:text-base font-normal'>Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.</div>
            <div className='font-medium text-xs md:text-base mt-3'>Kyle Merwin</div>
            <div className='font-normal text-[0.625rem] md:text-sm text-[#878787] mt-2'>CO-owner</div>
            <div className='absolute -right-0 md:-right-5 -top-5'><img src={Quotes} className='h-4 w-4 md:w-auto md:h-auto' alt="" /></div>
          </div>
        </div>
        {/* <div className='relative flex flex-row justify-between w-[50vw] p-3 mr-12 ml-12 opacity-20 hidden'>
          <img src={silderboxmain} alt="" />
          <div className='flex flex-col justify-start ml-4 mt-5 relative'>
            <div className='text-base font-normal'>Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.</div>
            <div className='font-medium text-base mt-3'>Kyle Merwin</div>
            <div className='font-normal text-sm text-[#878787] mt-2'>CO-owner</div>
            <div className='absolute -right-5 -top-5'><img src={Quotes} alt="" /></div>
          </div>
        </div>
         */}
      </div>

      <div className='flex flex-row items-center m-auto'>
        <div><img src={Previous} alt="" /></div>
        <div className='flex flex-row ml-12 mr-12'>
          <div className='w-4 h-4 rounded-full bg-[#696DCA]'></div>
          <div className='w-4 h-4 rounded-full ml-1 bg-[#EAEAEA]'></div>
          <div className='w-4 h-4 rounded-full ml-1 bg-[#EAEAEA]'></div>
          <div className='w-4 h-4 rounded-full ml-1 bg-[#EAEAEA]'></div>
          <div className='w-4 h-4 rounded-full ml-1 bg-[#EAEAEA]'></div>
          <div className='w-4 h-4 rounded-full ml-1 bg-[#EAEAEA]'></div>
        </div>
        <div><img src={Next} alt="" /></div>
      </div>
    </div>
  )
}
