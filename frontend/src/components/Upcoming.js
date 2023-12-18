import React from 'react'
import setting from '../assets/tabler-icon-settings.png'
import copy from '../assets/tabler-icon-copy.png'
import calset from '../assets/tabler-icon-calendar-time.png'
import tablericonbook1 from '../assets/tabler-icon-book (1).png'
import rightclick from '../assets/rightclick.png'
import leftclick from '../assets/leftclick.png'


export default function Upcoming() {
  return (
      <div className='w-full md:m-4 h-fit'>
          <div className='flex flex-row items-center'>
              <div><img src={tablericonbook1} alt="" /></div>
              <div className='text-xl font-medium ml-3'>MY Sessions</div>
          </div>
          <div className='flex flex-col mt-6'>
              <div className='flex flex-row border-b pb-3'>
                  <div className='text-[#696DCA] font-medium text-base'>Upcoming</div>
                  <div className='font-medium text-base ml-4'>Past</div>
              </div>
          </div>
          <div className='flex flex-col mt-6 border border-[#696DCA] rounded-lg  md:w-[70%] w-[90%]'>
              <div className='h-4 rounded-t-lg bg-[#696DCA]'></div>
              <div className='flex flex-col pl-4 pr-4 mt-3'>

                  <div className='flex flex-row justify-between'>
                      <div className='flex flex-col'>
                          <div className='font-medium md:text-xl text-base'>30 mins call with IIT JEE mentor </div>
                          <div className='text-[#878787] font-normal md:text-base text-xs'>Video Meeting | 30 mins</div>
                      </div>
                      <div><img src={setting} alt="" /></div>
                  </div>
                  <div className='flex flex-row items-center mt-2'>
                      <div><img src={calset} alt="" /></div>
                      <div className='text-[#696DCA] font-medium md:text-lg text-xs ml-2'>Mon,28 Oct | 8:30-9:00PM</div>
                  </div>
                  <div>
                      <button className='text-[#696DCA] font-medium md:text-lg text-xs border rounded-md border-[#696DCA] md:h-14 md:w-40 w-32 h-10 md:mt-4 mt-2 md:mb-4 mb-2'>Join meet</button>
                  </div>
                  <div className='flex flex-row items-center md:mb-4 mb-2'>
                      <div><img src={copy} alt="" className='' /></div>
                      <div className='font-normal md:text-lg text-xs'>Copy Link</div>
                  </div>
              </div>
          </div>
          <div className='flex flex-row justify-center items-center mb-10 mt-5'>
              <img src={leftclick} className='mr-10' alt="" />
              <div className='w-4 h-4 rounded-full bg-[#696DCA] mr-2'></div>
              <div className='w-4 h-4 rounded-full bg-[#D9D9D9] mr-2'></div>
              <div className='w-4 h-4 rounded-full bg-[#D9D9D9] mr-2'></div>
              <img src={rightclick} className='ml-10' alt="" />
          </div>
      </div>
  )
}
