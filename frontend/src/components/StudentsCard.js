import React from 'react'
import sidebar from '../assets/sidebar_student.png'

export default function StudentsCard(props) {
    return (
        <div className=' border-[#696DCA] border-[1px] md:border-4 h-fit md:h-4/5 md:m-6 rounded-lg relative mr-2' >
            <video controls width="640" height="360" className='h-[20rem] md:h-4/6'>
                <source src="your-video-url.mp4" type="video/mp4" />
            </video>
            <div className='flex flex-row h-[8rem] md:h-2/6 items-center justify-between'>
                <div><img src={sidebar} className='w-[3px] ml-3 mt-2 mr-2' alt="" /></div>
                <div className='flex flex-col'>
                    <div className='font-semibold text-base leading-5 mt-1'>{props.title}</div>
                    <div className='text-[#696DCA] text-sm '>{props.name}</div>
                </div>
            <div className='h-4 rounded-b-[4px] bg-black absolute bottom-0 w-full'></div>
            </div>
        </div>
    )
}
