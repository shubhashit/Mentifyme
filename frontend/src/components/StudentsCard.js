import React from 'react'
import sidebar from '../assets/sidebar_student.png'

export default function StudentsCard(props) {
    return (
        <div className=' border-[#696DCA] border-4 h-4/5 m-6 rounded-lg relative' >
            <video controls width="640" height="360" className='h-4/5'>
                <source src="your-video-url.mp4" type="video/mp4" />
            </video>
            <div className='flex flex-row h-1/6 items-center '>
                <div><img src={sidebar} className='w-[3px] ml-3 mt-2 mr-2' alt="" /></div>
                <div className='flex flex-col'>
                    <div className='font-semibold text-base leading-5 mt-1'>{props.title}</div>
                    <div className='text-[#696DCA] text-sm '>{props.name}</div>
                </div>
            </div>
            <div className='h-4 rounded-b-[4px] bg-black absolute bottom-0 w-full'></div>
        </div>
    )
}
