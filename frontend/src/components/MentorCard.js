import React from 'react'
import sidebar from '../assets/sidebar_student.png'

export default function MentorCard(props) {
  return (
    <div className='h-fit'>
          <div className=' border-[#696DCA] border-4 h-4/5 m-6 rounded-lg relative' >
              <video controls width="640" height="360" className='h-[40vh] lg:[50vh]'>
                  <source src="your-video-url.mp4" type="video/mp4" />
              </video>
              <div className='flex flex-col h-2/5 items-center justify-center bg-black'>
                  <div className='text-2xl font-bold text-white m-4'>{props.name}</div>
                  <div className='text-lg font-semibold text-white m-4'>{props.college}</div>
                  <div className='text-sm text-[#696DCA] m-4'>View Profile</div>
              </div>
          </div>
    </div>
  )
}
