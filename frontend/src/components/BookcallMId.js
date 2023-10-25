import React from 'react'

export default function BookcallMId() {
    return (
        <div className='flex flex-row h-fit mt-8 justify-around' >
            <div className='text-xs md:text-2xl font-normal m-4 w-[65vw] f'>🚀 Act Quickly! 🕙 Over 10 students are booking calls every hour. Don't miss out - secure your spot now!"</div>
            <div className='h-auto w-1 bg-[#696DCA]'></div>
            <div className='m-4 flex flex-col w-[35vw] items-center md:hidden'>
                <div className='text-xs'>Tarun Tiwari </div>
                <div className='text-[#3E4A59] text-[0.5rem] mt-2'>JEE ASPIRANT 2025</div>
                <div className='text-[0.65rem] text-center mt-1'>Students Booking Calls</div>
            </div>
            <div className='m-4 md:flex flex-row w-[35vw] items-center '>
                <div className='text-[0.875rem] text-start mt-1 text-[#696DCA] mr-6'>Students <br /> Booking <br /> Calls</div>
                <div>
                    <div className='text-2xl'>Tarun Tiwari </div>
                    <div className='text-[#3E4A59] text-xl mt-2'>JEE ASPIRANT 2025</div>
                </div>
            </div>
        </div>
    )
}
