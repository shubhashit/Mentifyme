import React from 'react'
import setting from '../assets/tabler-icon-settings.png'
import copy from '../assets/tabler-icon-copy.png'
import calset from '../assets/tabler-icon-calendar-time.png'
import tablericonbook1 from '../assets/tabler-icon-book (1).png'


export default function Upcoming() {
  return (
      <div className='w-2/4 m-4 h-fit'>
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
          <div className='flex flex-col mt-6 border border-[#696DCA] rounded-lg  w-[70%]'>
              <div className='h-4 rounded-t-lg bg-[#696DCA]'></div>
              <div className='flex flex-col pl-4 pr-4 mt-3'>

                  <div className='flex flex-row justify-between'>
                      <div className='flex flex-col'>
                          <div className='font-medium text-xl'>30 mins call with IIT JEE mentor </div>
                          <div className='text-[#878787] font-normal text-base'>Video Meeting | 30 mins</div>
                      </div>
                      <div><img src={setting} alt="" /></div>
                  </div>
                  <div className='flex flex-row items-center mt-2'>
                      <div><img src={calset} alt="" /></div>
                      <div className='text-[#696DCA] font-medium text-lg ml-2'>Mon,28 Oct | 8:30-9:00PM</div>
                  </div>
                  <div>
                      <button className='text-[#696DCA] font-medium text-lg border rounded-md border-[#696DCA] h-14 w-40 mt-4 mb-4'>Join meet</button>
                  </div>
                  <div className='flex flex-row items-center mb-4'>
                      <div><img src={copy} alt="" /></div>
                      <div className='font-normal text-lg'>Copy Link</div>
                  </div>
              </div>
          </div>
      </div>
  )
}
