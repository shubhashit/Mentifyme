import React from 'react'
import clset from '../assets/tabler-icon-calendar-stats (1).png'

export default function Bookcall() {
    return (
        <div className='w-2/4 m-4 h-fit'>
            <div className='flex flex-row items-center'>
                <div><img src={clset} alt="" /></div>
                <div className='font-medium text-3xl ml-2'>Book Calls</div>
            </div>
            <div className='flex flex-col items-center justify-between p-4 w-full mb-12'>
                <div className='bg-white text-black p-10 rounded-3xl w-full flex flex-col items-center'>
                    <div className='font-normal text-base md:text-3xl'><span className='font-medium'> Contact Us </span>for your doubts for booking call</div>
                    <div className='text-[#3E4A59] text-xs md:text-xl font-normal mt-4'>70% of the students, booked call after getting there queries solved</div>
                    <div className='flex flex-col items-center mt-4 md:flex-row'>
                        <div className='text-xs md:text-base font-medium text-white pt-3 pb-3 pl-6 pr-6 bg-[#696DCA] w-[9rem]  md:w-[13rem] text-center m-2 rounded '><button>Book call ₹399 only</button></div>
                        <div className='text-xs md:text-base font-medium text-[#696DCA] pt-3 pb-3 pl-6 pr-6 bg-white border border-[#696DCA] w-[9rem] md:w-[13rem] text-center m-2 rounded'><button>Contact Us</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
