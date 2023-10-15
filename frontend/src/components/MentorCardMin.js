import React from 'react'

export default function MentorCardMin(props) {
  return (
      <div className=' border-[#696DCA] border-[2px] h-fit w-[48%]  rounded relative' >
              <video controls width="640" height="360" className='h-[15rem]'>
                  <source src="your-video-url.mp4" type="video/mp4" />
              </video>
              <div className='flex flex-col h-fit items-center justify-center bg-black'>
                  <div className='text-xl font-bold text-white '>{props.name}</div>
                  <div className='text-base font-semibold text-white'>{props.college}</div>
                  <div className='text-sm text-[#696DCA] mt-8 mb-4'>View Profile</div>
              </div>
          </div>
  )
}
