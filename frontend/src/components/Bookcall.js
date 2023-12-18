import React from 'react'
import clset from '../assets/tabler-icon-calendar-stats (1).png'

export default function Bookcall() {
    return (
        <div className='md:w-2/4 m-4 h-fit'>
            <div className='flex flex-row items-center'>
                <div><img src={clset} alt="" /></div>
                <div className='font-medium md:text-3xl text-2xl ml-2'>Book Calls</div>
            </div>
            <div className='flex flex-col items-center justify-between p-4 w-full mb-12'>
                <div className='bg-white text-black md:p-10 rounded-3xl w-full flex flex-col items-center text-center mt-6 md:mt-0'>
                    <div className='font-normal md:text-3xl text-base'><span className='font-medium'> Contact Us </span>for your doubts for booking call</div>
                    <div className='text-[#3E4A59] text-[12px] md:text-xl font-normal md:mt-4 mt-1'>70% of the students, booked call after getting there queries solved</div>
                    <div className='flex flex-col items-center mt-4 md:flex-row'>
                        <div className='text-[12px] md:text-base font-medium text-white pt-3 pb-3 pl-6 pr-6 bg-[#696DCA] w-[10rem]  md:w-[13rem] text-center m-2 rounded '><button>Book call ₹399 only</button></div>
                        <div className='text-[12px] md:text-base font-medium text-[#696DCA] pt-3 pb-3 pl-6 pr-6 bg-white border border-[#696DCA] w-[10rem] md:w-[13rem] text-center m-2 rounded'><button>Contact Us</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
